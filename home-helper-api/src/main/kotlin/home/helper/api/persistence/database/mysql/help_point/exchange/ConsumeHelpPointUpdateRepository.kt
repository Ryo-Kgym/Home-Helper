/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.exchange

import org.mybatis.dynamic.sql.update.render.UpdateStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbUserPointMapper
import home.helper.api.persistence.database.mysql.table.DbUserPointRecord
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help_point.ExchangeHelpPointOutput

@Repository
class ConsumeHelpPointUpdateRepository(
    private val dbUserPointMapper: DbUserPointMapper,
) : ConvertSaveRepository<ExchangeHelpPointOutput, DbUserPointRecord> {

    override fun convert(target: ExchangeHelpPointOutput): DbUserPointRecord {
        return DbUserPointRecord(
            userId = target.userId.id,
            point = target.totalPoint.point,
        )
    }

    override fun internalSave(entity: DbUserPointRecord): Int {
        val provider = object : UpdateStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf(
                    "totalPoint" to entity.point!!,
                    "userId" to entity.userId!!,
                )
            }

            override fun getUpdateStatement(): String {
                return "update user_point " +
                        "set point = point - #{parameters.totalPoint, jdbcType=INTEGER} " +
                        "where user_id = #{parameters.userId, jdbcType=VARCHAR}"
            }
        }

        return dbUserPointMapper.update(provider)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.EXCHANGE_HELP_POINT
    }
}