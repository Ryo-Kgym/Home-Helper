/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.table_customize

import home.helper.api.persistence.database.mysql.id.IdType
import org.apache.ibatis.annotations.Mapper
import org.apache.ibatis.annotations.Param

@Mapper
interface IdHolderCustomMapper {
    
    fun incrementId(@Param("idType") idType: IdType)
}
