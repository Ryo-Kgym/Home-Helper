/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.table_customize

import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.id.IdType
import home.helper.api.persistence.database.mysql.table.DbIdHolderMapper
import home.helper.api.persistence.database.mysql.table.selectByPrimaryKey

/**
 * IDホルダのカスタムRepositoryです。
 */
@Repository
class IdHolderCustomRepository(
    private val dbIdHolderMapper: DbIdHolderMapper,
    private val idHolderCustomMapper: IdHolderCustomMapper,
) {

    /**
     * IDをインクリメントします。
     * @param idType IDタイプ
     */
    fun incrementId(idType: IdType) {
        idHolderCustomMapper.incrementId(idType)
    }

    /**
     * 現在のIDを取得します。
     * @param idType IDタイプ
     * @return ID
     */
    fun getCurrentId(idType: IdType): String {
        return dbIdHolderMapper.selectByPrimaryKey(idType)!!.currentId!!.toString()
    }
}