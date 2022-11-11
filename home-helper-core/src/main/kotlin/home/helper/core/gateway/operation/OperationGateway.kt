/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.operation

import home.helper.core.domain.model.operation.Operation

interface OperationGateway {

    fun load(): Operation
}