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
    constructor(id: String, date: LocalDate) :
            this(
                operatorId = OperatorId.valueOf(id),
                datetime = date.atStartOfDay()
            )

    constructor(id: String, datetime: LocalDateTime) :
            this(
                operatorId = OperatorId.valueOf(id),
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
