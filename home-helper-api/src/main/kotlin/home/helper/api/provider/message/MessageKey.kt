/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.message

/**
 * メッセージキーを操作するInterFaceです。
 * @param S ソース
 */
interface MessageKey<S> {

    /**
     * メッセージキーを生成します。
     * @param source ソース
     */
    fun buildKey(source: S): String
}