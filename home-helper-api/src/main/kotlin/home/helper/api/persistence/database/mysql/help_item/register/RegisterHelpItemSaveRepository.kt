/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.register

import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.dto.help_item.RegisterHelpItemOutput
import org.springframework.stereotype.Repository

@Repository
class RegisterHelpItemSaveRepository(
    helpItemInsertRepository: HelpItemInsertRepository,
) : ListSaveRepository<RegisterHelpItemOutput>(
    helpItemInsertRepository,
)