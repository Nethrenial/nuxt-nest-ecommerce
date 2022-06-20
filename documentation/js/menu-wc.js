'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-053a49c22282bcd76d6c489a425b5eb2609e7cf98c1b604ff37cea82e97b655164eeb1340c8e908bdfd2a7f1a7189c1d53b3fe524caf1f1c21ef830ac333916d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtRefreshTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' : 'data-target="#xs-controllers-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' :
                                            'id="xs-controllers-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' }>
                                            <li class="link">
                                                <a href="controllers/EmailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' : 'data-target="#xs-injectables-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' :
                                        'id="xs-injectables-links-module-EmailModule-e3a13f2d32783bb04b2532db065c525c50de366ccaf7f8dd89d2784e32f6f75b127e50bcf4084cc2052dbe9ade52cb0465a55cdba28f139d518a7553a0e43f3d"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailVerificationModule.html" data-type="entity-link" >EmailVerificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' : 'data-target="#xs-controllers-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' :
                                            'id="xs-controllers-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' }>
                                            <li class="link">
                                                <a href="controllers/EmailVerificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailVerificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' : 'data-target="#xs-injectables-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' :
                                        'id="xs-injectables-links-module-EmailVerificationModule-4705ade9dffa98934e05fe65c93170a52f2e8e69231be270a0419a24fe18bf2d6e79555cf464cac42abe1b55d9751484a265c80bcda7cf8a850ff9b5ef4928b3"' }>
                                        <li class="link">
                                            <a href="injectables/EmailVerificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailVerificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' : 'data-target="#xs-controllers-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' :
                                            'id="xs-controllers-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' : 'data-target="#xs-injectables-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' :
                                        'id="xs-injectables-links-module-UsersModule-78be6dd7c4b8e8fc1f326ecc5d618ecc35d1d3404df24e28dd5b6e2d4573ed448bc5bfb5a99dc1056ca892cb36176c5d3687c7b6097ca1c1fc8a62694dc6a3fe"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailController.html" data-type="entity-link" >EmailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailVerificationController.html" data-type="entity-link" >EmailVerificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConfirmEmailDto.html" data-type="entity-link" >ConfirmEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailVerificationService.html" data-type="entity-link" >EmailVerificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthenticationGuard.html" data-type="entity-link" >JwtAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" >JwtRefreshTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthenticationGuard.html" data-type="entity-link" >LocalAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EmailConfirmationGuard.html" data-type="entity-link" >EmailConfirmationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationTokenPayload.html" data-type="entity-link" >VerificationTokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});