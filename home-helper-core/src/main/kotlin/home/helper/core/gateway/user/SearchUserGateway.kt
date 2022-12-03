/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.user

import home.helper.core.domain.model.user.User
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.user.SearchUserCriteria

/**
 * ユーザ検索に関するGateway I/Fです。
 */
interface SearchUserGateway {

    /**
     * ユーザを検索します。
     * @param criteria 検索条件
     * @return ユーザのリスト
     */
    fun search(criteria: SearchUserCriteria = SearchUserCriteria()): List<User>

    /**
     * ユーザIDをキーに検索します。
     * @param userId ユーザID
     * @return ユーザ
     */
    fun findBy(userId: UserId): User?
}