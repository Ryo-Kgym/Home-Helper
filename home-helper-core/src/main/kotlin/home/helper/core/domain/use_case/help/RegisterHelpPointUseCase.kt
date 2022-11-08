/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.use_case.help

import home.helper.core.domain.use_case.RegisterDefaultUseCase
import home.helper.core.dto.help.RegisterHelpPointInput

/**
 * お手伝いポイントを登録するユースケースです。
 */
interface RegisterHelpPointUseCase : RegisterDefaultUseCase<RegisterHelpPointInput>