/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import java.util.ArrayList;
import java.util.List;

public class DbV1HelpPointEarnedDetailExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public DbV1HelpPointEarnedDetailExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andHelpPointEarnedDetailIdIsNull() {
            addCriterion("help_point_earned_detail_id is null");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdIsNotNull() {
            addCriterion("help_point_earned_detail_id is not null");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdEqualTo(String value) {
            addCriterion("help_point_earned_detail_id =", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdNotEqualTo(String value) {
            addCriterion("help_point_earned_detail_id <>", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdGreaterThan(String value) {
            addCriterion("help_point_earned_detail_id >", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdGreaterThanOrEqualTo(String value) {
            addCriterion("help_point_earned_detail_id >=", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdLessThan(String value) {
            addCriterion("help_point_earned_detail_id <", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdLessThanOrEqualTo(String value) {
            addCriterion("help_point_earned_detail_id <=", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdLike(String value) {
            addCriterion("help_point_earned_detail_id like", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdNotLike(String value) {
            addCriterion("help_point_earned_detail_id not like", value, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdIn(List<String> values) {
            addCriterion("help_point_earned_detail_id in", values, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdNotIn(List<String> values) {
            addCriterion("help_point_earned_detail_id not in", values, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdBetween(String value1, String value2) {
            addCriterion("help_point_earned_detail_id between", value1, value2, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andHelpPointEarnedDetailIdNotBetween(String value1, String value2) {
            addCriterion("help_point_earned_detail_id not between", value1, value2, "helpPointEarnedDetailId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdIsNull() {
            addCriterion("earned_achievement_id is null");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdIsNotNull() {
            addCriterion("earned_achievement_id is not null");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdEqualTo(String value) {
            addCriterion("earned_achievement_id =", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdNotEqualTo(String value) {
            addCriterion("earned_achievement_id <>", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdGreaterThan(String value) {
            addCriterion("earned_achievement_id >", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdGreaterThanOrEqualTo(String value) {
            addCriterion("earned_achievement_id >=", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdLessThan(String value) {
            addCriterion("earned_achievement_id <", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdLessThanOrEqualTo(String value) {
            addCriterion("earned_achievement_id <=", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdLike(String value) {
            addCriterion("earned_achievement_id like", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdNotLike(String value) {
            addCriterion("earned_achievement_id not like", value, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdIn(List<String> values) {
            addCriterion("earned_achievement_id in", values, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdNotIn(List<String> values) {
            addCriterion("earned_achievement_id not in", values, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdBetween(String value1, String value2) {
            addCriterion("earned_achievement_id between", value1, value2, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andEarnedAchievementIdNotBetween(String value1, String value2) {
            addCriterion("earned_achievement_id not between", value1, value2, "earnedAchievementId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdIsNull() {
            addCriterion("help_item_id is null");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdIsNotNull() {
            addCriterion("help_item_id is not null");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdEqualTo(String value) {
            addCriterion("help_item_id =", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdNotEqualTo(String value) {
            addCriterion("help_item_id <>", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdGreaterThan(String value) {
            addCriterion("help_item_id >", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdGreaterThanOrEqualTo(String value) {
            addCriterion("help_item_id >=", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdLessThan(String value) {
            addCriterion("help_item_id <", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdLessThanOrEqualTo(String value) {
            addCriterion("help_item_id <=", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdLike(String value) {
            addCriterion("help_item_id like", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdNotLike(String value) {
            addCriterion("help_item_id not like", value, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdIn(List<String> values) {
            addCriterion("help_item_id in", values, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdNotIn(List<String> values) {
            addCriterion("help_item_id not in", values, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdBetween(String value1, String value2) {
            addCriterion("help_item_id between", value1, value2, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemIdNotBetween(String value1, String value2) {
            addCriterion("help_item_id not between", value1, value2, "helpItemId");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountIsNull() {
            addCriterion("help_item_count is null");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountIsNotNull() {
            addCriterion("help_item_count is not null");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountEqualTo(Integer value) {
            addCriterion("help_item_count =", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountNotEqualTo(Integer value) {
            addCriterion("help_item_count <>", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountGreaterThan(Integer value) {
            addCriterion("help_item_count >", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("help_item_count >=", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountLessThan(Integer value) {
            addCriterion("help_item_count <", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountLessThanOrEqualTo(Integer value) {
            addCriterion("help_item_count <=", value, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountIn(List<Integer> values) {
            addCriterion("help_item_count in", values, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountNotIn(List<Integer> values) {
            addCriterion("help_item_count not in", values, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountBetween(Integer value1, Integer value2) {
            addCriterion("help_item_count between", value1, value2, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemCountNotBetween(Integer value1, Integer value2) {
            addCriterion("help_item_count not between", value1, value2, "helpItemCount");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointIsNull() {
            addCriterion("help_item_total_point is null");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointIsNotNull() {
            addCriterion("help_item_total_point is not null");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointEqualTo(Integer value) {
            addCriterion("help_item_total_point =", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointNotEqualTo(Integer value) {
            addCriterion("help_item_total_point <>", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointGreaterThan(Integer value) {
            addCriterion("help_item_total_point >", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointGreaterThanOrEqualTo(Integer value) {
            addCriterion("help_item_total_point >=", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointLessThan(Integer value) {
            addCriterion("help_item_total_point <", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointLessThanOrEqualTo(Integer value) {
            addCriterion("help_item_total_point <=", value, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointIn(List<Integer> values) {
            addCriterion("help_item_total_point in", values, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointNotIn(List<Integer> values) {
            addCriterion("help_item_total_point not in", values, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointBetween(Integer value1, Integer value2) {
            addCriterion("help_item_total_point between", value1, value2, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andHelpItemTotalPointNotBetween(Integer value1, Integer value2) {
            addCriterion("help_item_total_point not between", value1, value2, "helpItemTotalPoint");
            return (Criteria) this;
        }

        public Criteria andGroupIdIsNull() {
            addCriterion("group_id is null");
            return (Criteria) this;
        }

        public Criteria andGroupIdIsNotNull() {
            addCriterion("group_id is not null");
            return (Criteria) this;
        }

        public Criteria andGroupIdEqualTo(String value) {
            addCriterion("group_id =", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotEqualTo(String value) {
            addCriterion("group_id <>", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdGreaterThan(String value) {
            addCriterion("group_id >", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdGreaterThanOrEqualTo(String value) {
            addCriterion("group_id >=", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLessThan(String value) {
            addCriterion("group_id <", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLessThanOrEqualTo(String value) {
            addCriterion("group_id <=", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLike(String value) {
            addCriterion("group_id like", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotLike(String value) {
            addCriterion("group_id not like", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdIn(List<String> values) {
            addCriterion("group_id in", values, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotIn(List<String> values) {
            addCriterion("group_id not in", values, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdBetween(String value1, String value2) {
            addCriterion("group_id between", value1, value2, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotBetween(String value1, String value2) {
            addCriterion("group_id not between", value1, value2, "groupId");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated do_not_delete_during_merge
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table helper_kids.help_point_earned_detail
     *
     * @mbg.generated
     */
    public static class Criterion {
        private final String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private final String typeHandler;

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }
    }
}