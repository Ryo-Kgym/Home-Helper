/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.operation

import java.time.LocalDate
import java.time.LocalDateTime

/**
 * 操作情報を保持するクラスです。
 */
data class Operation(
    val operatorId: OperatorId,
    val datetime: LocalDateTime,
) {
    constructor(id: Int, date: LocalDate) :
            this(
                operatorId = OperatorId(id),
                datetime = date.atStartOfDay()
            )

    constructor(id: Int, datetime: LocalDateTime) :
            this(
                operatorId = OperatorId(id),
                datetime = datetime
            )

    /**
     * 操作日を返します。
     * @return 操作日
     */
    fun getDate(): LocalDate {
        return datetime.toLocalDate()
    }
}
