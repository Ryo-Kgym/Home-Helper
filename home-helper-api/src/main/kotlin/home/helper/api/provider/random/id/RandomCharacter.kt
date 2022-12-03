/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.random.id

class RandomCharacter {

    companion object {
        fun get(length: Int): String {
            val charset = ('a'..'z') + ('A'..'Z') + ('0'..'9')

            return (1..length)
                .map { charset.random() }
                .joinToString("")
        }
    }
}