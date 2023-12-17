/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.table;

import java.util.ArrayList;
import java.util.List;

public class DbV1HelperKidParentExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public DbV1HelperKidParentExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
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
     * This method corresponds to the database table helper_kids.helper_kid_parent
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
     * This method corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table helper_kids.helper_kid_parent
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
     * This class corresponds to the database table helper_kids.helper_kid_parent
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

        public Criteria andHelperKidParentIdIsNull() {
            addCriterion("helper_kid_parent_id is null");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdIsNotNull() {
            addCriterion("helper_kid_parent_id is not null");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdEqualTo(String value) {
            addCriterion("helper_kid_parent_id =", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdNotEqualTo(String value) {
            addCriterion("helper_kid_parent_id <>", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdGreaterThan(String value) {
            addCriterion("helper_kid_parent_id >", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdGreaterThanOrEqualTo(String value) {
            addCriterion("helper_kid_parent_id >=", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdLessThan(String value) {
            addCriterion("helper_kid_parent_id <", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdLessThanOrEqualTo(String value) {
            addCriterion("helper_kid_parent_id <=", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdLike(String value) {
            addCriterion("helper_kid_parent_id like", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdNotLike(String value) {
            addCriterion("helper_kid_parent_id not like", value, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdIn(List<String> values) {
            addCriterion("helper_kid_parent_id in", values, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdNotIn(List<String> values) {
            addCriterion("helper_kid_parent_id not in", values, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdBetween(String value1, String value2) {
            addCriterion("helper_kid_parent_id between", value1, value2, "helperKidParentId");
            return (Criteria) this;
        }

        public Criteria andHelperKidParentIdNotBetween(String value1, String value2) {
            addCriterion("helper_kid_parent_id not between", value1, value2, "helperKidParentId");
            return (Criteria) this;
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

        public Criteria andParentUserIdIsNull() {
            addCriterion("parent_user_id is null");
            return (Criteria) this;
        }

        public Criteria andParentUserIdIsNotNull() {
            addCriterion("parent_user_id is not null");
            return (Criteria) this;
        }

        public Criteria andParentUserIdEqualTo(String value) {
            addCriterion("parent_user_id =", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdNotEqualTo(String value) {
            addCriterion("parent_user_id <>", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdGreaterThan(String value) {
            addCriterion("parent_user_id >", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("parent_user_id >=", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdLessThan(String value) {
            addCriterion("parent_user_id <", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdLessThanOrEqualTo(String value) {
            addCriterion("parent_user_id <=", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdLike(String value) {
            addCriterion("parent_user_id like", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdNotLike(String value) {
            addCriterion("parent_user_id not like", value, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdIn(List<String> values) {
            addCriterion("parent_user_id in", values, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdNotIn(List<String> values) {
            addCriterion("parent_user_id not in", values, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdBetween(String value1, String value2) {
            addCriterion("parent_user_id between", value1, value2, "parentUserId");
            return (Criteria) this;
        }

        public Criteria andParentUserIdNotBetween(String value1, String value2) {
            addCriterion("parent_user_id not between", value1, value2, "parentUserId");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table helper_kids.helper_kid_parent
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
     * This class corresponds to the database table helper_kids.helper_kid_parent
     *
     * @mbg.generated
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

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