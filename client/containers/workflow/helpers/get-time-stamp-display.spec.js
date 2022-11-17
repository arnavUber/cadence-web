// Copyright (c) 2022 Uber Technologies Inc.
//
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import moment from 'moment';
import getTimeStampDisplay from './get-time-stamp-display';

describe('getTimeStampDisplay', () => {
  const DATE = '2020-01-01 00:00:00';

  describe('When passed an event with no timestamp', () => {
    it('should return "".', () => {
      const event = {};
      const output = getTimeStampDisplay({ event });

      expect(output).toEqual('');
    });
  });

  describe('When passed an event with a timestamp and index = -1', () => {
    it('should return "".', () => {
      const event = {
        timestamp: moment(DATE),
      };
      const index = -1;
      const output = getTimeStampDisplay({ event, index });

      expect(output).toEqual('');
    });
  });

  describe('When passed an event with a timestamp and index = 0', () => {
    it('should return the date string.', () => {
      const event = {
        timestamp: moment(DATE),
      };
      const index = 0;
      const output = getTimeStampDisplay({ event, index });

      expect(output).toEqual('Jan 1, 2020 12:00:00 AM');
    });
  });
});
