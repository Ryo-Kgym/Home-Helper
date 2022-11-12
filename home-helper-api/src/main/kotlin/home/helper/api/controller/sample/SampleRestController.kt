/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.controller.sample

import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementIdRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = ["/api/sample/rest"])
class SampleRestController(
    private val helpPointEarnedAchievementIdRepository: HelpPointEarnedAchievementIdRepository
) {

    @GetMapping
    fun get(): String {
        helpPointEarnedAchievementIdRepository.increment()
        val a = helpPointEarnedAchievementIdRepository.getId()

        return a.toString()
    }
}