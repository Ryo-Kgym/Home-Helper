/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class DbV1HelperKidPointExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public DbV1HelperKidPointExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
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
     * This method corresponds to the database table helper_kids.helper_kid_point
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
     * This method corresponds to the database table helper_kids.helper_kid_point
     *
     * @mbg.generated
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_point
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
     * This class corresponds to the database table helper_kids.helper_kid_point
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

        public Criteria andHelperKidIdIsNull() {
            addCriterion("helper_kid_id is null");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdIsNotNull() {
            addCriterion("helper_kid_id is not null");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdEqualTo(String value) {
            addCriterion("helper_kid_id =", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdNotEqualTo(String value) {
            addCriterion("helper_kid_id <>", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdGreaterThan(String value) {
            addCriterion("helper_kid_id >", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdGreaterThanOrEqualTo(String value) {
            addCriterion("helper_kid_id >=", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdLessThan(String value) {
            addCriterion("helper_kid_id <", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdLessThanOrEqualTo(String value) {
            addCriterion("helper_kid_id <=", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdLike(String value) {
            addCriterion("helper_kid_id like", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdNotLike(String value) {
            addCriterion("helper_kid_id not like", value, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdIn(List<String> values) {
            addCriterion("helper_kid_id in", values, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdNotIn(List<String> values) {
            addCriterion("helper_kid_id not in", values, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdBetween(String value1, String value2) {
            addCriterion("helper_kid_id between", value1, value2, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andHelperKidIdNotBetween(String value1, String value2) {
            addCriterion("helper_kid_id not between", value1, value2, "helperKidId");
            return (Criteria) this;
        }

        public Criteria andPointIsNull() {
            addCriterion("point is null");
            return (Criteria) this;
        }

        public Criteria andPointIsNotNull() {
            addCriterion("point is not null");
            return (Criteria) this;
        }

        public Criteria andPointEqualTo(Integer value) {
            addCriterion("point =", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointNotEqualTo(Integer value) {
            addCriterion("point <>", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointGreaterThan(Integer value) {
            addCriterion("point >", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointGreaterThanOrEqualTo(Integer value) {
            addCriterion("point >=", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointLessThan(Integer value) {
            addCriterion("point <", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointLessThanOrEqualTo(Integer value) {
            addCriterion("point <=", value, "point");
            return (Criteria) this;
        }

        public Criteria andPointIn(List<Integer> values) {
            addCriterion("point in", values, "point");
            return (Criteria) this;
        }

        public Criteria andPointNotIn(List<Integer> values) {
            addCriterion("point not in", values, "point");
            return (Criteria) this;
        }

        public Criteria andPointBetween(Integer value1, Integer value2) {
            addCriterion("point between", value1, value2, "point");
            return (Criteria) this;
        }

        public Criteria andPointNotBetween(Integer value1, Integer value2) {
            addCriterion("point not between", value1, value2, "point");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeIsNull() {
            addCriterion("last_help_datetime is null");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeIsNotNull() {
            addCriterion("last_help_datetime is not null");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeEqualTo(LocalDateTime value) {
            addCriterion("last_help_datetime =", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeNotEqualTo(LocalDateTime value) {
            addCriterion("last_help_datetime <>", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeGreaterThan(LocalDateTime value) {
            addCriterion("last_help_datetime >", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeGreaterThanOrEqualTo(LocalDateTime value) {
            addCriterion("last_help_datetime >=", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeLessThan(LocalDateTime value) {
            addCriterion("last_help_datetime <", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeLessThanOrEqualTo(LocalDateTime value) {
            addCriterion("last_help_datetime <=", value, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeIn(List<LocalDateTime> values) {
            addCriterion("last_help_datetime in", values, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeNotIn(List<LocalDateTime> values) {
            addCriterion("last_help_datetime not in", values, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeBetween(LocalDateTime value1, LocalDateTime value2) {
            addCriterion("last_help_datetime between", value1, value2, "lastHelpDatetime");
            return (Criteria) this;
        }

        public Criteria andLastHelpDatetimeNotBetween(LocalDateTime value1, LocalDateTime value2) {
            addCriterion("last_help_datetime not between", value1, value2, "lastHelpDatetime");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table helper_kids.helper_kid_point
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
     * This class corresponds to the database table helper_kids.helper_kid_point
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