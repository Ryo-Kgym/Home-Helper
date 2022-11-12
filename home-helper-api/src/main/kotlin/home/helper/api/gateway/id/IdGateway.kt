/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.gateway.id

/**
 * IDの操作をするGateway InterFaceです。
 * @param T IDの型
 */
interface IdGateway<T> {

    /**
     * IDをインクリメントします。
     */
    fun increment()

    /**
     * IDを取得します。
     */
    fun getId(): T
}