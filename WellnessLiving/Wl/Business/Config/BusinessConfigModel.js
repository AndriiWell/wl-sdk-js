/**
 * An endpoint that manages business configurations for clients, bookings, payments, and related things.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Config_BusinessConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Business_Config_BusinessConfigModel_a_business_policy
   * @property {number} a_wait_service The keys are listed as IDs from {@link RsServiceSid}, and values are flags
   * outlining whether wait listing is allowed.
   * @property {number} i_book_before The minimum hours|days|months before a class can be booked.
   * @property {number} i_book_future The maximum hours|days|months after a class can be booked.
   * @property {number} i_cancel The minimum hours|days|months before a class can be canceled without penalty.
   * @property {number} i_promote The minimum hours|days|months before a class can be promoted from a wait list.
   * @property {number} i_reattempt_count The number of failed auto-payment reattempts.
   * @property {number} id_book_before Hours|days|months from {@link ADurationSid}.
   * @property {number} id_book_future Hours|days|months from {@link ADurationSid}.
   * @property {number} id_cancel Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote Hours|days|months from {@link ADurationSid}.
   * @property {boolean} is_book_inside_active_pay_period If `true`, clients with Purchase Options can only book sessions
   * within their current paid period. If `false`, clients can book sessions for the Purchase Option's duration.
   * @property {number} is_disable_promotion If `true`, when an auto-payment fails, a client's account isn't debited and
   * their Purchase Option becomes inactive. Otherwise, this will be `false`, which is also the default.
   * @property {boolean} is_enable_payment_penalty Determines whether to charge a penalty after the final auto-payment attempt.
   * @property {boolean} is_enable_payment_reattempt Determines whether to reattempt failed auto-payments.
   * @property {boolean} is_enable_staff_ip_restriction Determines whether to restrict IP addresses for staff members.
   * @property {number} is_prevent_booking If `true`, booking for a client with a negative balance is disabled. Otherwise,
   * this will be `false`, which is also the default.
   * @property {boolean} is_staff_restrict If true, clients can't choose a provider in the appointment wizard. Otherwise,
   * this will be `false`.
   * @property {boolean} is_wait Determines whether the wait list is enabled or disabled.
   * @property {number} k_currency The currency key.
   * @property {number} k_timezone The timezone key.
   * @property {string} m_payment_penalty The penalty amount to charge a client after the final auto-payment attempt.
   * @property {string} url_custom The custom URL from Business URLs.
   */

  /**
   * All business policies connected to clients and bookings.
   *
   * <dl>
   *   <dt>int <var>a_wait_service</var></dt>
   *   <dd>The keys are listed as IDs from {@link RsServiceSid}, and values are flags outlining whether wait listing is allowed.</dd>
   *   <dt>int <var>i_book_before</var></dt>
   *   <dd>The minimum hours|days|months before a class can be booked.</dd>
   *   <dt>int <var>i_book_future</var></dt>
   *   <dd>The maximum hours|days|months after a class can be booked.</dd>
   *   <dt>int <var>i_cancel</var></dt>
   *   <dd>The minimum hours|days|months before a class can be canceled without penalty.</dd>
   *   <dt>int <var>i_promote</var></dt>
   *   <dd>The minimum hours|days|months before a class can be promoted from a wait list.</dd>
   *   <dt>int <var>i_reattempt_count</var></dt>
   *   <dd>The number of failed auto-payment reattempts.</dd>
   *   <dt>int <var>id_book_before</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_book_future</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_cancel</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_promote</var></dt>
   *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>bool <var>is_book_inside_active_pay_period</var></dt>
   *   <dd>
   *     If `true`, clients with Purchase Options can only book sessions within their current paid period.
   *     If `false`, clients can book sessions for the Purchase Option's duration.
   *   </dd>
   *   <dt>int <var>is_disable_promotion</var></dt>
   *   <dd>
   *     If `true`, when an auto-payment fails, a client's account isn't debited and their Purchase Option becomes
   *     inactive. Otherwise, this will be `false`, which is also the default.
   *   </dd>
   *   <dt>bool <var>is_enable_payment_penalty</var></dt>
   *   <dd>Determines whether to charge a penalty after the final auto-payment attempt.</dd>
   *   <dt>bool <var>is_enable_payment_reattempt</var></dt>
   *   <dd>Determines whether to reattempt failed auto-payments.</dd>
   *   <dt>bool <var>is_enable_staff_ip_restriction</var></dt>
   *   <dd>Determines whether to restrict IP addresses for staff members.</dd>
   *   <dt>int <var>is_prevent_booking</var></dt>
   *   <dd>`If `true`, booking for a client with a negative balance is disabled. Otherwise, this will be `false`,
   *   which is also the default.</dd>
   *   <dt>bool <var>is_staff_restrict</var></dt>
   *   <dd>If true, clients can't choose a provider in the appointment wizard. Otherwise, this will be `false`.</dd>
   *   <dt>bool <var>is_wait</var></dt>
   *   <dd>Enable\disable wait list.</dd>
   *   <dt>int <var>k_currency</var></dt>
   *   <dd>The currency key.</dd>
   *   <dt>int <var>k_timezone</var></dt>
   *   <dd>The timezone key.</dd>
   *   <dt>string <var>m_payment_penalty</var></dt>
   *   <dd>The penalty amount to charge a client after the final auto-payment attempt.</dd>
   *   <dt>string <var>url_custom</var></dt>
   *   <dd>The custom URL from Business URLs.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Config_BusinessConfigModel_a_business_policy}
   */
  this.a_business_policy = undefined;

  /**
   * Determines whether staff members should select a location at checkout.
   *
   * If `true`, staff members must select a location at checkout. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_select = undefined;

  /**
   * Determines whether the business has the white label setting enabled in the admin settings.
   *
   * If `true`, the setting is enabled. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_white_label = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Config_BusinessConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Config_BusinessConfigModel.prototype.config=function()
{
  return {"a_field": {"a_business_policy": {"get": {"result": true}},"is_location_select": {"get": {"result": true}},"is_white_label": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Config_BusinessConfigModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_Config_BusinessConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */