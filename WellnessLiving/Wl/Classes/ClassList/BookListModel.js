/**
 * The endpoint to get all the classes for a location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_ClassList_BookListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_ClassList_BookListModel_a_class
   * @property {{}} a_class_tab The list of tab keys for the class.
   * @property {string} dt_class_book The book date of an event in UTC date/time format. Can be empty string if user cannot book the event.
   * @property {boolean} is_active <tt>true</tt> if the class is active; <tt>false</tt> otherwise.
   * @property {boolean} is_event <tt>true</tt> for events; <tt>false</tt> for classes.
   * @property {*} k_class The class key. The primary key in {@link \RsClassSql} table.
   * @property {*} k_enrollment_block The enrollment block key. The primary key in {@link \RsEnrollmentBlockSql} table.
   * @property {string} m_price_total The total price for an event.
   * @property {*} text_description The description of the class.
   * @property {*} text_title The name of the class.
   */

  /**
   * A class list. Every element has the following structure:
   * <dl>
   *   <dt>array <var>a_class_tab</var></dt>
   *   <dd>The list of tab keys for the class.</dd>
   *
   *   <dt>string <var>dt_class_book</var></dt>
   *   <dd>The book date of an event in UTC date/time format. Can be empty string if user cannot book the event.</dd>
   *
   *   <dt>bool <var>is_active</var></dt>
   *   <dd><tt>true</tt> if the class is active; <tt>false</tt> otherwise.</dd>
   *
   *   <dt>bool <var>is_event</var></dt>
   *   <dd><tt>true</tt> for events; <tt>false</tt> for classes.</dd>
   *
   *   <dt>sting <var>k_class</var></dt>
   *   <dd>The class key. The primary key in {@link \RsClassSql} table.</dd>
   *
   *   <dt>sting <var>k_enrollment_block</var></dt>
   *   <dd>The enrollment block key. The primary key in {@link \RsEnrollmentBlockSql} table.</dd>
   *
   *   <dt>string <var>m_price_total</var></dt>
   *   <dd>The total price for an event.</dd>
   *
   *   <dt>sting <var>text_description</var></dt>
   *   <dd>The description of the class.</dd>
   *
   *   <dt>sting <var>text_title</var></dt>
   *   <dd>The name of the class.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Classes_ClassList_BookListModel_a_class[]}
   */
  this.a_class = undefined;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_ClassList_BookListModel);

/**
 * @inheritDoc
 */
Wl_Classes_ClassList_BookListModel.prototype.config=function()
{
  return {"a_field": {"a_class": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};