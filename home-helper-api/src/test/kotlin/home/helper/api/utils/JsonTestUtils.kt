/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.utils

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import java.io.IOException
import java.nio.file.Paths

class JsonTestUtils {

    companion object {

        @Throws(JsonProcessingException::class, IOException::class)
        fun load(path: String): JsonNode {
            val objectMapper = ObjectMapper()
            return objectMapper.readTree(Paths.get("src/test/resources/", path).toFile())
        }
    }

    @Test
    fun loadTest() {
        val path = "/GraphQLTest/sample/sample.json"
        val actual = load(path)

        assertThat(actual.get("ID").intValue(), `is`(1))
        assertThat(actual.get("Name").textValue(), `is`("Suzuki Seiya"))
        assertThat(actual.get("Gender").textValue(), `is`("Man"))
        assertThat(actual.get("Physical").get("Height").doubleValue(), `is`(180.5))
        assertThat(actual.get("Grades").get(0).get("Homerun").intValue(), `is`(30))
    }
}