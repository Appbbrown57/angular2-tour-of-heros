"use strict";
var router_1 = require('@angular/router');
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroesRoutes = [
    { path: 'heroes', component: hero_list_component_1.HeroListComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
exports.heroesRouting = router_1.RouterModule.forChild(heroesRoutes);
//# sourceMappingURL=heroes.routing.js.map