/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.help_item

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.dto.help_item.SearchHelpItemCriteria

interface SearchHelpItemGateway {

    fun search(criteria: SearchHelpItemCriteria = SearchHelpItemCriteria()): List<HelpItem>

    fun findBy(id: HelpItemId): HelpItem?
}