/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.user

import home.helper.core.domain.model.user.UserId

/**
 * ユーザ検索の条件を保持するクラスです。
 */
data class SearchUserCriteria(
        val userId: UserId? = null,
)
