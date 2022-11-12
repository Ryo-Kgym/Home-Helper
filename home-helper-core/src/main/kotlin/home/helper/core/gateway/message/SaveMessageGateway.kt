/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.message

import home.helper.core.dto.save.SaveOutput

/**
 * 保存用のメッセージを操作するGatewayです。
 */
interface SaveMessageGateway : MessageGateway<SaveOutput>
