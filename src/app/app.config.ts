import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { createReducer, provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { categoryReducer } from './category.reduce';
import { counterReduce } from './counter.reduce';
import { provideHttpClient } from '@angular/common/http';
import { todoReduce } from './todo.reduce';
import { TodoEffect } from './todo.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(),
      provideStore({ category: categoryReducer , counter:counterReduce , todos :todoReduce}),
       provideEffects(TodoEffect)]
};
