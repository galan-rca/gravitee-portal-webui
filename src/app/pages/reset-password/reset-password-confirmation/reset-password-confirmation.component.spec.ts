/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from '../../../test/translate-testing-module';

import { ResetPasswordConfirmationComponent } from './reset-password-confirmation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { getTokenServiceMock } from '../../../test/helper.spec';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMock } from '../../../test/mock.helper.spec';
import { NotificationService } from '../../../services/notification.service';
import { TokenService } from '../../../services/token.service';

describe('RegistrationConfirmationComponent', () => {
  let component: ResetPasswordConfirmationComponent;
  let fixture: ComponentFixture<ResetPasswordConfirmationComponent>;
  let tokenService: TokenService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordConfirmationComponent],
      imports: [RouterTestingModule, TranslateTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        provideMock(NotificationService),
        provideMock(TokenService),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordConfirmationComponent);
    tokenService = getTokenServiceMock();

    component = fixture.componentInstance;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

});
