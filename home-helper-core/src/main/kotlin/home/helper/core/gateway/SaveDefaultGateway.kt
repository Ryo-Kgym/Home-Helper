/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway

import home.helper.core.dto.save.SaveOutput

/**
 * 保存用のデフォルトゲートウェイ インターフェースです。
 * @param T 対象データ型
 */
interface SaveDefaultGateway<T> {

    /**
     * 対象データを保存します。
     * @param target 対象データ
     * @return 実行結果
     */
    fun save(target: T): SaveOutput

}