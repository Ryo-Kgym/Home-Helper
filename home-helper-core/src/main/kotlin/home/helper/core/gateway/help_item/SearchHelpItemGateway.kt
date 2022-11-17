/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.help_item

import home.helper.core.domain.model.help.HelpItem
import home.helper.core.dto.help_item.SearchHelpItemCriteria

interface SearchHelpItemGateway {

    fun search(criteria: SearchHelpItemCriteria = SearchHelpItemCriteria()): List<HelpItem>
}