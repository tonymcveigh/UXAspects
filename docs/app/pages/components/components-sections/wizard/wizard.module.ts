import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule, CheckboxModule, MarqueeWizardModule, RadioButtonModule, TabsetModule, WizardModule, FocusIfModule } from '../../../../../../src/index';
import { DocumentationComponentsModule } from '../../../../components/components.module';
import { DocumentationCategoryComponent } from '../../../../components/documentation-category/documentation-category.component';
import { DocumentationPage, ResolverService } from '../../../../services/resolver/resolver.service';
import { WrappersModule } from '../../../../wrappers/wrappers.module';
import { ComponentsMarqueeWizardNg1Component } from './marquee-wizard-ng1/marquee-wizard-ng1.component';
import { ComponentsMarqueeWizardComponent } from './marquee-wizard/marquee-wizard.component';
import { ComponentsVerticalWizardNg1Component } from './vertical-wizard-ng1/vertical-wizard-ng1.component';
import { ComponentsWizardNg1Component } from './wizard-ng1/wizard-ng1.component';
import { ComponentsWizardValidationNg1Component } from './wizard-validation-ng1/wizard-validation-ng1.component';
import { ComponentsWizardComponent } from './wizard/wizard.component';
import { A11yModule } from '@angular/cdk/a11y';

const SECTIONS = [
    ComponentsWizardComponent,
    ComponentsWizardNg1Component,
    ComponentsWizardValidationNg1Component,
    ComponentsVerticalWizardNg1Component,
    ComponentsMarqueeWizardNg1Component,
    ComponentsMarqueeWizardComponent
];

const ROUTES = [
    {
        path: '**',
        component: DocumentationCategoryComponent,
        data: {
            category: ResolverService.resolveCategoryData(DocumentationPage.Components, 'Wizard')
        }
    }
];

@NgModule({
    imports: [
        A11yModule,
        AccordionModule,
        CheckboxModule,
        CommonModule,
        DocumentationComponentsModule,
        FocusIfModule,
        MarqueeWizardModule,
        ModalModule,
        RadioButtonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        TabsetModule,
        WizardModule,
        WrappersModule,
    ],
    exports: SECTIONS,
    declarations: SECTIONS,
    entryComponents: SECTIONS
})
export class ComponentsWizardModule {

    constructor(componentFactoryResolver: ComponentFactoryResolver, resolverService: ResolverService) {
        resolverService.registerResolver(componentFactoryResolver);
    }
}