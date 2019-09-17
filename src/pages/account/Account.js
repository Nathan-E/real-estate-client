import React from 'react';
import Header from '../../common/header/Header';
import Jumbotron from '../../common/jumbotron/Jumbotron';
import Footer from '../../common/footer/Footer';

const UserProfile = () => {
  return (
    <>
      <Header />
      <Jumbotron
        origin='My Account'
        originTitle='Home'
        path='/'
        pathTitle='My Account'
      />
    <div class="login-register-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
        <div class="container">
            <div class="row row-25">
                <div class="col-lg-4 col-12 mb-sm-50 mb-xs-50">
                    <ul class="myaccount-tab-list nav">
                        <li><a class="active" href="#profile-tab" data-toggle="tab"><i class="pe-7s-user"></i>My Profile</a></li>
                        <li><a href="#agency-tab" data-toggle="tab"><i class="pe-7s-note2"></i>Agency Profile</a></li>
                        <li><a href="#properties-tab" data-toggle="tab"><i class="pe-7s-photo"></i>My Properties</a></li>
                        <li><a href="add-properties.html"><i class="pe-7s-back fa-flip-horizontal"></i>Add New Property</a></li>
                        <li><a href="#password-tab" data-toggle="tab"><i class="pe-7s-lock"></i>Change Password</a></li>
                        <li><a href="login-register.html"><i class="pe-7s-power"></i>Log Out</a></li>
                    </ul>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="tab-content">
                        <div id="profile-tab" class="tab-pane show active">
                            <form action="#">
                                <div class="row">
                                    <div class="col-12 mb-30"><h3 class="mb-0">Personal Profile</h3></div>
                                    <div class="col-md-6 col-12 mb-30"><label for="f_name">First Name</label><input type="text" id="f_name" value="Donald" /></div>
                                    <div class="col-md-6 col-12 mb-30"><label for="l_name">Last Name</label><input type="text" id="l_name" value="Palmer" /></div>
                                    <div class="col-12 mb-30"><label for="about_me">About Me</label><textarea id="about_me"></textarea></div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_address">Address</label><input type="text" id="personal_address" value="256, 1st AVE, Manchester 125 , Noth England" /></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_number">Phone Number</label><input type="text" id="personal_number" value="(756) 447 5779" /></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_email">Email</label><input type="text" id="personal_email" value="info@example.com" /></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_web">Website</label><input type="text" id="personal_web" value="www.example.com" /></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_agency">Agencies</label><input type="text" id="personal_agency" value=" Royao Estates, Duplex Estates" /></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_company">Company</label><input type="text" id="personal_company" value="GTA5" /></div>
                                        </div>
                                        <h4>Social</h4>
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_facebook"><i class="fa fa-facebook-official"></i>Facebook</label><input type="text" id="personal_social_facebook" value="www.facebook.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_twitter"><i class="fa fa-twitter"></i>Twitter</label><input type="text" id="personal_social_twitter" value="www.twitter.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_linkedin"><i class="fa fa-linkedin"></i>Linkedin</label><input type="text" id="personal_social_linkedin" value="www.linkedin.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_google"><i class="fa fa-google"></i>Google Plus</label><input type="text" id="personal_social_google" value="www.google.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_instagram"><i class="fa fa-instagram"></i>Instagram</label><input type="text" id="personal_social_instagram" value="www.instagram.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_pinterest"><i class="fa fa-pinterest"></i>Pinterest</label><input type="text" id="personal_social_pinterest" value="www.pinterest.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_skype"><i class="fa fa-skype"></i>Skype</label><input type="text" id="personal_social_skype" value="www.skype.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="personal_social_tumblr"><i class="fa fa-tumblr"></i>Tumblr</label><input type="text" id="personal_social_tumblr" value="www.tumblr.com"/></div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-30"><button class="btn">Save Change</button></div>
                                </div>
                            </form>
                        </div>
                        <div id="agency-tab" class="tab-pane">
                            <form action="#">
                                <div class="row">
                                    <div class="col-12 mb-30"><h3 class="mb-0">Agency Profile</h3></div>
                                    <div class="col-12 mb-30"><label for="agency_name">Agency Name</label><input type="text" id="agency_name" value="Royao Estates"/></div>
                                    <div class="col-12 mb-30"><label for="about_agency">About Agency</label><textarea id="about_agency"></textarea></div>

                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_address">Address</label><input type="text" id="agency_address" value="256, 1st AVE, Manchester 125 , Noth England"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_number">Phone Number</label><input type="text" id="agency_number" value="(756) 447 5779"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_email">Email</label><input type="text" id="agency_email" value="info@example.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_web">Website</label><input type="text" id="agency_web" value="www.example.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_license">License</label><input type="text" id="agency_license" value="AB7876A6"/></div>
                                        </div>
                                        <h4>Social</h4>
                                        <div class="row">
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_facebook"><i class="fa fa-facebook-official"></i>Facebook</label><input type="text" id="agency_social_facebook" value="www.facebook.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_twitter"><i class="fa fa-twitter"></i>Twitter</label><input type="text" id="agency_social_twitter" value="www.twitter.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_linkedin"><i class="fa fa-linkedin"></i>Linkedin</label><input type="text" id="agency_social_linkedin" value="www.linkedin.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_google"><i class="fa fa-google"></i>Google Plus</label><input type="text" id="agency_social_google" value="www.google.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_instagram"><i class="fa fa-instagram"></i>Instagram</label><input type="text" id="agency_social_instagram" value="www.instagram.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_pinterest"><i class="fa fa-pinterest"></i>Pinterest</label><input type="text" id="agency_social_pinterest" value="www.pinterest.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_skype"><i class="fa fa-skype"></i>Skype</label><input type="text" id="agency_social_skype" value="www.skype.com"/></div>
                                            <div class="col-md-6 col-12 mb-30"><label for="agency_social_tumblr"><i class="fa fa-tumblr"></i>Tumblr</label><input type="text" id="agency_social_tumblr" value="www.tumblr.com"/></div>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-30"><button class="btn">Save Change</button></div>
                                </div>
                            </form>
                        </div>
                        <div id="properties-tab" class="tab-pane">
                            <div class="row">

                                <div class="property-item col-md-6 col-12 mb-40">
                                    <div class="property-inner">
                                        <div class="image">
                                            <a href="single-properties.html"><img src="assets/images/property/property-1.jpg" alt="" /></a>
                                            <ul class="property-feature">
                                                <li>
                                                    <span class="area"><img src="assets/images/icons/area.png" alt=""/>550 SqFt</span>
                                                </li>
                                                <li>
                                                    <span class="bed"><img src="assets/images/icons/bed.png" alt=""/>6</span>
                                                </li>
                                                <li>
                                                    <span class="bath"><img src="assets/images/icons/bath.png" alt=""/>4</span>
                                                </li>
                                                <li>
                                                    <span class="parking"><img src="assets/images/icons/parking.png" alt=""/>3</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content">
                                            <div class="left">
                                                <h3 class="title"><a href="single-properties.html">Friuli-Venezia Giulia</a></h3>
                                                <span class="location"><img src="assets/images/icons/marker.png" alt=""/>568 E 1st Ave, Miami</span>
                                            </div>
                                            <div class="right">
                                                <div class="type-wrap">
                                                    <span class="price">$550<span>M</span></span>
                                                    <span class="type">For Rent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="property-item col-md-6 col-12 mb-40">
                                    <div class="property-inner">
                                        <div class="image">
                                            <span class="label">Feature</span>
                                            <a href="single-properties.html"><img src="assets/images/property/property-2.jpg" alt=""/></a>
                                            <ul class="property-feature">
                                                <li>
                                                    <span class="area"><img src="assets/images/icons/area.png" alt=""/>550 SqFt</span>
                                                </li>
                                                <li>
                                                    <span class="bed"><img src="assets/images/icons/bed.png" alt=""/>6</span>
                                                </li>
                                                <li>
                                                    <span class="bath"><img src="assets/images/icons/bath.png" alt=""/>4</span>
                                                </li>
                                                <li>
                                                    <span class="parking"><img src="assets/images/icons/parking.png" alt=""/>3</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content">
                                            <div class="left">
                                                <h3 class="title"><a href="single-properties.html">Marvel de Villa</a></h3>
                                                <span class="location"><img src="assets/images/icons/marker.png" alt=""/>450 E 1st Ave, New Jersey</span>
                                            </div>
                                            <div class="right">
                                                <div class="type-wrap">
                                                    <span class="price">$2550</span>
                                                    <span class="type">For Sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="property-item col-md-6 col-12 mb-40">
                                    <div class="property-inner">
                                        <div class="image">
                                            <span class="label">popular</span>
                                            <a href="single-properties.html"><img src="assets/images/property/property-3.jpg" alt=""/></a>
                                            <ul class="property-feature">
                                                <li>
                                                    <span class="area"><img src="assets/images/icons/area.png" alt=""/>550 SqFt</span>
                                                </li>
                                                <li>
                                                    <span class="bed"><img src="assets/images/icons/bed.png" alt=""/>6</span>
                                                </li>
                                                <li>
                                                    <span class="bath"><img src="assets/images/icons/bath.png" alt=""/>4</span>
                                                </li>
                                                <li>
                                                    <span class="parking"><img src="assets/images/icons/parking.png" alt=""/>3</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content">
                                            <div class="left">
                                                <h3 class="title"><a href="single-properties.html">Ruposi Bangla Cottage</a></h3>
                                                <span class="location"><img src="assets/images/icons/marker.png" alt=""/>215 L AH Rod, California</span>
                                            </div>
                                            <div class="right">
                                                <div class="type-wrap">
                                                    <span class="price">$550<span>M</span></span>
                                                    <span class="type">For Rent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="property-item col-md-6 col-12 mb-40">
                                    <div class="property-inner">
                                        <div class="image">
                                            <a href="single-properties.html"><img src="assets/images/property/property-4.jpg" alt=""/></a>
                                            <ul class="property-feature">
                                                <li>
                                                    <span class="area"><img src="assets/images/icons/area.png" alt=""/>550 SqFt</span>
                                                </li>
                                                <li>
                                                    <span class="bed"><img src="assets/images/icons/bed.png" alt=""/>6</span>
                                                </li>
                                                <li>
                                                    <span class="bath"><img src="assets/images/icons/bath.png" alt=""/>4</span>
                                                </li>
                                                <li>
                                                    <span class="parking"><img src="assets/images/icons/parking.png" alt=""/>3</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content">
                                            <div class="left">
                                                <h3 class="title"><a href="single-properties.html">MayaKanon de Villa</a></h3>
                                                <span class="location"><img src="assets/images/icons/marker.png" alt=""/>12 EA 1st Ave, Washington</span>
                                            </div>
                                            <div class="right">
                                                <div class="type-wrap">
                                                    <span class="price">$550<span>M</span></span>
                                                    <span class="type">For Rent</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div id="password-tab" class="tab-pane">
                            <form action="#">

                                <div class="row">
                                    <div class="col-12 mb-30"><h3 class="mb-0">Change Password</h3></div>
                                    <div class="col-12 mb-30"><label for="current_password">Current Password</label><input type="password" id="current_password" value="currentpassword"/></div>
                                    <div class="col-12 mb-30"><label for="new_password">New Password</label><input type="password" id="new_password"/></div>
                                    <div class="col-12 mb-30"><label for="confirm_new_password">Confirm New Password</label><input type="password" id="confirm_new_password"/></div>
                                    <div class="col-12 mb-30"><button class="btn">Save Change</button></div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
      <Footer />
    </>
  );
};

export default UserProfile;
