/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v2.table;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DbV2CreditCardSummaryMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int deleteByExample(DbV2CreditCardSummaryExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int insert(DbV2CreditCardSummary record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int insertSelective(DbV2CreditCardSummary record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    DbV2CreditCardSummary selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(DbV2CreditCardSummary record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table household.credit_card_summary
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(DbV2CreditCardSummary record);
}