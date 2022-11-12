/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.message

import home.helper.core.domain.model.message.HomeHelperMessage

/**
 * メッセージの操作をするGatewayです。
 * @param K キーの型
 */
interface MessageGateway<K> {

    /**
     * メッセージを取得します。
     * @param key キー
     * @return メッセージ
     */
    fun getMessage(key: K): HomeHelperMessage
}