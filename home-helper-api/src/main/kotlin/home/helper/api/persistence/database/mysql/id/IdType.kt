/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

enum class IdType(
    val length: Int
) {
    HELP_POINT_EARNED_ACHIEVEMENT_ID(32),
    HELP_POINT_EARNED_DETAIL_ID(32),
    HELP_ITEM_ID(32),
    HELP_POINT_EXCHANGED_ACHIEVEMENT_ID(32)
    ;
}