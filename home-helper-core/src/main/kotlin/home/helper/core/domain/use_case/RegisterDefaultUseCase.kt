/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.use_case

/**
 * 登録用のデフォルトユースケースのインターフェースです。
 * @param I InputDS
 */
interface RegisterDefaultUseCase<I> {

    /**
     * 入力ソースを加工し、登録します。
     * @param input 入力ソース
     */
    fun register(input: I): Int

}