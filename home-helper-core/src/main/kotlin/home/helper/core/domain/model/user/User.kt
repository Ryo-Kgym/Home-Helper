/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.user

/**
 * ユーザを保持するクラスです。
 */
data class User(
    val userId: UserId,
    val userName: String,
    val nameSuffix: String = "",
) {

    constructor(id: String,
                name: String,
                nameSuffix: String = ""
    ) : this(
        userId = UserId(id),
        userName = name,
        nameSuffix = nameSuffix
    )

    /**
     * 敬称をつけた名前を返します。
     */
    fun getNameWithSuffix() = "$userName $nameSuffix"
}
