import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

// rutas json
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: HomeComponent}
]

export const appRoutingProviders:any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);