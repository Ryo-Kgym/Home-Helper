/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.sample

import graphql.kickstart.tools.GraphQLMutationResolver
import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class BookResolver : GraphQLQueryResolver {

    fun bookById(id: String): Book {
        return Book(
            id = id,
            name = "test",
            authors = listOf(
                Author("テスト", "太郎"),
                Author("ストテ", "二郎"),
                Author("トテス", "三郎"),
            )
        )
    }
}

@Component
class BookMutationResolver: GraphQLMutationResolver {

    fun registerBook(name: String): Book {
        return Book(
            id = "2",
            name = "test",
            authors = listOf(
                Author("テスト", "太郎"),
                Author("ストテ", "二郎"),
                Author("トテス", "三郎"),
            )
        )
    }
}


data class Book(
    private val id: String,
    private val name: String,
    private val authors: List<Author>,
)

data class Author(
    private val firstName: String,
    private val lastName: String,
)