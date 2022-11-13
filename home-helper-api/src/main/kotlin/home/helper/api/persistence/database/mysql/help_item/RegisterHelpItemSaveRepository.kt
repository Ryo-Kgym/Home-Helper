/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item

import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.dto.help.RegisterHelpItemOutput
import org.springframework.stereotype.Repository

@Repository
class RegisterHelpItemSaveRepository(
    helpItemInsertRepository: HelpItemInsertRepository,
) : ListSaveRepository<RegisterHelpItemOutput>(
    helpItemInsertRepository,
)