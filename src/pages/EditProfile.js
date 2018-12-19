import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Activity from '../components/activity';
import CoverTimeline from '../components/cover-timeline';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-7">
                                {/* Basic Information
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Edit basic information</h4>
                                        <div className="line" />
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <form name="basic-info" id="basic-info" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="firstname">First name</label>
                                                    <input id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" defaultValue="John" />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="lastname" className>Last name</label>
                                                    <input id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" defaultValue="Doe" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="email">My email</label>
                                                    <input id="email" className="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" defaultValue="razor.venon@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <p className="custom-label"><strong>Date of Birth</strong></p>
                                                <div className="form-group col-sm-3 col-xs-6">
                                                    <label htmlFor="month" className="sr-only" />
                                                    <select className="form-control" id="day">
                                                        <option value="Day">Day</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                        <option>12</option>
                                                        <option>13</option>
                                                        <option>14</option>
                                                        <option>15</option>
                                                        <option>16</option>
                                                        <option>17</option>
                                                        <option>18</option>
                                                        <option selected>19</option>
                                                        <option>20</option>
                                                        <option>21</option>
                                                        <option>22</option>
                                                        <option>23</option>
                                                        <option>24</option>
                                                        <option>25</option>
                                                        <option>26</option>
                                                        <option>27</option>
                                                        <option>28</option>
                                                        <option>29</option>
                                                        <option>30</option>
                                                        <option>31</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-3 col-xs-6">
                                                    <label htmlFor="month" className="sr-only" />
                                                    <select className="form-control" id="month">
                                                        <option value="month">Month</option>
                                                        <option>Jan</option>
                                                        <option>Feb</option>
                                                        <option>Mar</option>
                                                        <option>Apr</option>
                                                        <option>May</option>
                                                        <option>Jun</option>
                                                        <option>Jul</option>
                                                        <option>Aug</option>
                                                        <option>Sep</option>
                                                        <option>Oct</option>
                                                        <option>Nov</option>
                                                        <option selected>Dec</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6 col-xs-12">
                                                    <label htmlFor="year" className="sr-only" />
                                                    <select className="form-control" id="year">
                                                        <option value="year">Year</option>
                                                        <option selected>2000</option>
                                                        <option>2001</option>
                                                        <option>2002</option>
                                                        <option>2004</option>
                                                        <option>2005</option>
                                                        <option>2006</option>
                                                        <option>2007</option>
                                                        <option>2008</option>
                                                        <option>2009</option>
                                                        <option>2010</option>
                                                        <option>2011</option>
                                                        <option>2012</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group gender">
                                                <span className="custom-label"><strong>I am a: </strong></span>
                                                <label className="radio-inline">
                                                    <input type="radio" name="optradio" defaultChecked />Male
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="optradio" />Female
                                                </label>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="city"> My city</label>
                                                    <input id="city" className="form-control input-group-lg" type="text" name="city" title="Enter city" placeholder="Your city" defaultValue="New York" />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="country">My country</label>
                                                    <select className="form-control" id="country">
                                                        <option value="country">Country</option>
                                                        <option value="AFG">Afghanistan</option>
                                                        <option value="ALA">Ƭand Islands</option>
                                                        <option value="ALB">Albania</option>
                                                        <option value="DZA">Algeria</option>
                                                        <option value="ASM">American Samoa</option>
                                                        <option value="AND">Andorra</option>
                                                        <option value="AGO">Angola</option>
                                                        <option value="AIA">Anguilla</option>
                                                        <option value="ATA">Antarctica</option>
                                                        <option value="ATG">Antigua and Barbuda</option>
                                                        <option value="ARG">Argentina</option>
                                                        <option value="ARM">Armenia</option>
                                                        <option value="ABW">Aruba</option>
                                                        <option value="AUS">Australia</option>
                                                        <option value="AUT">Austria</option>
                                                        <option value="AZE">Azerbaijan</option>
                                                        <option value="BHS">Bahamas</option>
                                                        <option value="BHR">Bahrain</option>
                                                        <option value="BGD">Bangladesh</option>
                                                        <option value="BRB">Barbados</option>
                                                        <option value="BLR">Belarus</option>
                                                        <option value="BEL">Belgium</option>
                                                        <option value="BLZ">Belize</option>
                                                        <option value="BEN">Benin</option>
                                                        <option value="BMU">Bermuda</option>
                                                        <option value="BTN">Bhutan</option>
                                                        <option value="BOL">Bolivia, Plurinational State of</option>
                                                        <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                                                        <option value="BIH">Bosnia and Herzegovina</option>
                                                        <option value="BWA">Botswana</option>
                                                        <option value="BVT">Bouvet Island</option>
                                                        <option value="BRA">Brazil</option>
                                                        <option value="IOT">British Indian Ocean Territory</option>
                                                        <option value="BRN">Brunei Darussalam</option>
                                                        <option value="BGR">Bulgaria</option>
                                                        <option value="BFA">Burkina Faso</option>
                                                        <option value="BDI">Burundi</option>
                                                        <option value="KHM">Cambodia</option>
                                                        <option value="CMR">Cameroon</option>
                                                        <option value="CAN">Canada</option>
                                                        <option value="CPV">Cape Verde</option>
                                                        <option value="CYM">Cayman Islands</option>
                                                        <option value="CAF">Central African Republic</option>
                                                        <option value="TCD">Chad</option>
                                                        <option value="CHL">Chile</option>
                                                        <option value="CHN">China</option>
                                                        <option value="CXR">Christmas Island</option>
                                                        <option value="CCK">Cocos (Keeling) Islands</option>
                                                        <option value="COL">Colombia</option>
                                                        <option value="COM">Comoros</option>
                                                        <option value="COG">Congo</option>
                                                        <option value="COD">Congo, the Democratic Republic of the</option>
                                                        <option value="COK">Cook Islands</option>
                                                        <option value="CRI">Costa Rica</option>
                                                        <option value="CIV">C𴥠d'Ivoire</option>
                                                        <option value="HRV">Croatia</option>
                                                        <option value="CUB">Cuba</option>
                                                        <option value="CUW">Cura袯</option>
                                                        <option value="CYP">Cyprus</option>
                                                        <option value="CZE">Czech Republic</option>
                                                        <option value="DNK">Denmark</option>
                                                        <option value="DJI">Djibouti</option>
                                                        <option value="DMA">Dominica</option>
                                                        <option value="DOM">Dominican Republic</option>
                                                        <option value="ECU">Ecuador</option>
                                                        <option value="EGY">Egypt</option>
                                                        <option value="SLV">El Salvador</option>
                                                        <option value="GNQ">Equatorial Guinea</option>
                                                        <option value="ERI">Eritrea</option>
                                                        <option value="EST">Estonia</option>
                                                        <option value="ETH">Ethiopia</option>
                                                        <option value="FLK">Falkland Islands (Malvinas)</option>
                                                        <option value="FRO">Faroe Islands</option>
                                                        <option value="FJI">Fiji</option>
                                                        <option value="FIN">Finland</option>
                                                        <option value="FRA">France</option>
                                                        <option value="GUF">French Guiana</option>
                                                        <option value="PYF">French Polynesia</option>
                                                        <option value="ATF">French Southern Territories</option>
                                                        <option value="GAB">Gabon</option>
                                                        <option value="GMB">Gambia</option>
                                                        <option value="GEO">Georgia</option>
                                                        <option value="DEU">Germany</option>
                                                        <option value="GHA">Ghana</option>
                                                        <option value="GIB">Gibraltar</option>
                                                        <option value="GRC">Greece</option>
                                                        <option value="GRL">Greenland</option>
                                                        <option value="GRD">Grenada</option>
                                                        <option value="GLP">Guadeloupe</option>
                                                        <option value="GUM">Guam</option>
                                                        <option value="GTM">Guatemala</option>
                                                        <option value="GGY">Guernsey</option>
                                                        <option value="GIN">Guinea</option>
                                                        <option value="GNB">Guinea-Bissau</option>
                                                        <option value="GUY">Guyana</option>
                                                        <option value="HTI">Haiti</option>
                                                        <option value="HMD">Heard Island and McDonald Islands</option>
                                                        <option value="VAT">Holy See (Vatican City State)</option>
                                                        <option value="HND">Honduras</option>
                                                        <option value="HKG">Hong Kong</option>
                                                        <option value="HUN">Hungary</option>
                                                        <option value="ISL">Iceland</option>
                                                        <option value="IND">India</option>
                                                        <option value="IDN">Indonesia</option>
                                                        <option value="IRN">Iran, Islamic Republic of</option>
                                                        <option value="IRQ">Iraq</option>
                                                        <option value="IRL">Ireland</option>
                                                        <option value="IMN">Isle of Man</option>
                                                        <option value="ISR">Israel</option>
                                                        <option value="ITA">Italy</option>
                                                        <option value="JAM">Jamaica</option>
                                                        <option value="JPN">Japan</option>
                                                        <option value="JEY">Jersey</option>
                                                        <option value="JOR">Jordan</option>
                                                        <option value="KAZ">Kazakhstan</option>
                                                        <option value="KEN">Kenya</option>
                                                        <option value="KIR">Kiribati</option>
                                                        <option value="PRK">Korea, Democratic People's Republic of</option>
                                                        <option value="KOR">Korea, Republic of</option>
                                                        <option value="KWT">Kuwait</option>
                                                        <option value="KGZ">Kyrgyzstan</option>
                                                        <option value="LAO">Lao People's Democratic Republic</option>
                                                        <option value="LVA">Latvia</option>
                                                        <option value="LBN">Lebanon</option>
                                                        <option value="LSO">Lesotho</option>
                                                        <option value="LBR">Liberia</option>
                                                        <option value="LBY">Libya</option>
                                                        <option value="LIE">Liechtenstein</option>
                                                        <option value="LTU">Lithuania</option>
                                                        <option value="LUX">Luxembourg</option>
                                                        <option value="MAC">Macao</option>
                                                        <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
                                                        <option value="MDG">Madagascar</option>
                                                        <option value="MWI">Malawi</option>
                                                        <option value="MYS">Malaysia</option>
                                                        <option value="MDV">Maldives</option>
                                                        <option value="MLI">Mali</option>
                                                        <option value="MLT">Malta</option>
                                                        <option value="MHL">Marshall Islands</option>
                                                        <option value="MTQ">Martinique</option>
                                                        <option value="MRT">Mauritania</option>
                                                        <option value="MUS">Mauritius</option>
                                                        <option value="MYT">Mayotte</option>
                                                        <option value="MEX">Mexico</option>
                                                        <option value="FSM">Micronesia, Federated States of</option>
                                                        <option value="MDA">Moldova, Republic of</option>
                                                        <option value="MCO">Monaco</option>
                                                        <option value="MNG">Mongolia</option>
                                                        <option value="MNE">Montenegro</option>
                                                        <option value="MSR">Montserrat</option>
                                                        <option value="MAR">Morocco</option>
                                                        <option value="MOZ">Mozambique</option>
                                                        <option value="MMR">Myanmar</option>
                                                        <option value="NAM">Namibia</option>
                                                        <option value="NRU">Nauru</option>
                                                        <option value="NPL">Nepal</option>
                                                        <option value="NLD">Netherlands</option>
                                                        <option value="NCL">New Caledonia</option>
                                                        <option value="NZL">New Zealand</option>
                                                        <option value="NIC">Nicaragua</option>
                                                        <option value="NER">Niger</option>
                                                        <option value="NGA">Nigeria</option>
                                                        <option value="NIU">Niue</option>
                                                        <option value="NFK">Norfolk Island</option>
                                                        <option value="MNP">Northern Mariana Islands</option>
                                                        <option value="NOR">Norway</option>
                                                        <option value="OMN">Oman</option>
                                                        <option value="PAK">Pakistan</option>
                                                        <option value="PLW">Palau</option>
                                                        <option value="PSE">Palestinian Territory, Occupied</option>
                                                        <option value="PAN">Panama</option>
                                                        <option value="PNG">Papua New Guinea</option>
                                                        <option value="PRY">Paraguay</option>
                                                        <option value="PER">Peru</option>
                                                        <option value="PHL">Philippines</option>
                                                        <option value="PCN">Pitcairn</option>
                                                        <option value="POL">Poland</option>
                                                        <option value="PRT">Portugal</option>
                                                        <option value="PRI">Puerto Rico</option>
                                                        <option value="QAT">Qatar</option>
                                                        <option value="REU">R궮ion</option>
                                                        <option value="ROU">Romania</option>
                                                        <option value="RUS">Russian Federation</option>
                                                        <option value="RWA">Rwanda</option>
                                                        <option value="BLM">Saint Barthꭥmy</option>
                                                        <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
                                                        <option value="KNA">Saint Kitts and Nevis</option>
                                                        <option value="LCA">Saint Lucia</option>
                                                        <option value="MAF">Saint Martin (French part)</option>
                                                        <option value="SPM">Saint Pierre and Miquelon</option>
                                                        <option value="VCT">Saint Vincent and the Grenadines</option>
                                                        <option value="WSM">Samoa</option>
                                                        <option value="SMR">San Marino</option>
                                                        <option value="STP">Sao Tome and Principe</option>
                                                        <option value="SAU">Saudi Arabia</option>
                                                        <option value="SEN">Senegal</option>
                                                        <option value="SRB">Serbia</option>
                                                        <option value="SYC">Seychelles</option>
                                                        <option value="SLE">Sierra Leone</option>
                                                        <option value="SGP">Singapore</option>
                                                        <option value="SXM">Sint Maarten (Dutch part)</option>
                                                        <option value="SVK">Slovakia</option>
                                                        <option value="SVN">Slovenia</option>
                                                        <option value="SLB">Solomon Islands</option>
                                                        <option value="SOM">Somalia</option>
                                                        <option value="ZAF">South Africa</option>
                                                        <option value="SGS">South Georgia and the South Sandwich Islands</option>
                                                        <option value="SSD">South Sudan</option>
                                                        <option value="ESP">Spain</option>
                                                        <option value="LKA">Sri Lanka</option>
                                                        <option value="SDN">Sudan</option>
                                                        <option value="SUR">Suriname</option>
                                                        <option value="SJM">Svalbard and Jan Mayen</option>
                                                        <option value="SWZ">Swaziland</option>
                                                        <option value="SWE">Sweden</option>
                                                        <option value="CHE">Switzerland</option>
                                                        <option value="SYR">Syrian Arab Republic</option>
                                                        <option value="TWN">Taiwan, Province of China</option>
                                                        <option value="TJK">Tajikistan</option>
                                                        <option value="TZA">Tanzania, United Republic of</option>
                                                        <option value="THA">Thailand</option>
                                                        <option value="TLS">Timor-Leste</option>
                                                        <option value="TGO">Togo</option>
                                                        <option value="TKL">Tokelau</option>
                                                        <option value="TON">Tonga</option>
                                                        <option value="TTO">Trinidad and Tobago</option>
                                                        <option value="TUN">Tunisia</option>
                                                        <option value="TUR">Turkey</option>
                                                        <option value="TKM">Turkmenistan</option>
                                                        <option value="TCA">Turks and Caicos Islands</option>
                                                        <option value="TUV">Tuvalu</option>
                                                        <option value="UGA">Uganda</option>
                                                        <option value="UKR">Ukraine</option>
                                                        <option value="ARE">United Arab Emirates</option>
                                                        <option value="GBR">United Kingdom</option>
                                                        <option value="USA" selected>United States</option>
                                                        <option value="UMI">United States Minor Outlying Islands</option>
                                                        <option value="URY">Uruguay</option>
                                                        <option value="UZB">Uzbekistan</option>
                                                        <option value="VUT">Vanuatu</option>
                                                        <option value="VEN">Venezuela, Bolivarian Republic of</option>
                                                        <option value="VNM">Viet Nam</option>
                                                        <option value="VGB">Virgin Islands, British</option>
                                                        <option value="VIR">Virgin Islands, U.S.</option>
                                                        <option value="WLF">Wallis and Futuna</option>
                                                        <option value="ESH">Western Sahara</option>
                                                        <option value="YEM">Yemen</option>
                                                        <option value="ZMB">Zambia</option>
                                                        <option value="ZWE">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="my-info">About me</label>
                                                    <textarea id="my-info" name="information" className="form-control" placeholder="Some texts about me" rows={4} cols={400} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur"} />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Activity />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default EditProfile;