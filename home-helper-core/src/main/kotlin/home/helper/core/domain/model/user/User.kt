/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.user

import java.time.LocalDateTime
import home.helper.core.domain.model.help_point.HelpPoint

/**
 * ユーザを保持するクラスです。
 */
data class User(
    val userId: UserId,
    val userName: String,
    val nameSuffix: String = "",
    val currentPoint: HelpPoint = HelpPoint.ZERO,
    val lastHelpDateTime: LocalDateTime = LocalDateTime.MIN,
) {

    constructor(
        id: String,
        name: String,
        nameSuffix: String = "",
        currentPoint: HelpPoint = HelpPoint.ZERO,
        lastHelpDateTime: LocalDateTime = LocalDateTime.MIN,
    ) : this(
        userId = UserId(id),
        userName = name,
        nameSuffix = nameSuffix,
        currentPoint = currentPoint,
        lastHelpDateTime = lastHelpDateTime,
    )

    /**
     * 敬称をつけた名前を返します。
     */
    fun getNameWithSuffix() = "$userName $nameSuffix"
}
