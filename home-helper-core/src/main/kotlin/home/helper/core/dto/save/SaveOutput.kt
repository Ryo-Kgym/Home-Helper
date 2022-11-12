/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.save

import home.helper.core.domain.model.save.SaveUseCaseEnum

/**
 * 保存処理の実行結果を保持するクラスです。
 */
data class SaveOutput(
    val result: Int,
    val useCase: SaveUseCaseEnum,
)
