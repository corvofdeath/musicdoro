import { Observable, Subject } from 'rxjs';

const startSubject = new Subject();
const flashSubject = new Subject();

export default {

    getStartNotification: function () {
        return startSubject.asObservable();
    },

    sendStartNotification: function (value) {
        startSubject.next(value);
    },

    getFlashNotification: function () {
        return flashSubject.asObservable();
    },

    sendFlashNotification: function (value) {
        flashSubject.next(value);
    }
}