/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.register

import org.mybatis.dynamic.sql.update.render.UpdateStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbUserPointMapper
import home.helper.api.persistence.database.mysql.table.DbUserPointRecord
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help_point.RegisterHelpPointOutput

@Repository
class TotalHelpPointUpdateRepository(
    private val dbUserPointMapper: DbUserPointMapper,
) : ConvertSaveRepository<RegisterHelpPointOutput, DbUserPointRecord> {

    override fun convert(target: RegisterHelpPointOutput): DbUserPointRecord {
        return DbUserPointRecord(
            userId = target.userId.id,
            point = target.totalHelpPoint.value,
            lastHelpDatetime = target.earnedDateTime,
        )
    }

    override fun internalSave(entity: DbUserPointRecord): Int {
        val provider = object : UpdateStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf(
                    "totalPoint" to entity.point!!,
                    "lastHelpDatetime" to entity.lastHelpDatetime!!,
                    "userId" to entity.userId!!,
                )
            }

            override fun getUpdateStatement(): String {
                return "update user_point " +
                        "set point = point + #{parameters.totalPoint, jdbcType=INTEGER}, " +
                        "last_help_datetime =  #{parameters.lastHelpDatetime, jdbcType=TIMESTAMP} " +
                        "where user_id = #{parameters.userId, jdbcType=VARCHAR}"
            }
        }

        return dbUserPointMapper.update(provider)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.REGISTER_HELP_POINT
    }
}