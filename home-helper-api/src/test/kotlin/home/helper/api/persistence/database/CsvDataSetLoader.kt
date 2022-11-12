/*
 * Copyright (c) 2021. Uchi No Project
 */
package home.helper.api.persistence.database

import org.dbunit.dataset.IDataSet
import org.dbunit.dataset.ReplacementDataSet
import org.dbunit.dataset.csv.CsvURLDataSet
import org.springframework.core.io.Resource
import com.github.springtestdbunit.dataset.AbstractDataSetLoader

internal class CsvDataSetLoader : AbstractDataSetLoader() {

    @Throws(Exception::class)
    override fun createDataSet(resource: Resource): IDataSet {
        val csvUrlDataSet = CsvURLDataSet(resource.url)

        val replacementDataSet = ReplacementDataSet(csvUrlDataSet)
        replacementDataSet.addReplacementObject("[null]", null)

        return replacementDataSet
    }
}