import { Observable, Subject } from 'rxjs';

const startSubject = new Subject();
const flashSubject = new Subject();
const endSubject = new Subject();

export default {

    getStartNotification: function () {
        return startSubject.asObservable();
    },

    sendStartNotification: function (value) {
        startSubject.next(value);
    },

    getEndNotification: function () {
        return endSubject.asObservable();
    },

    sendEndNotification: function (value) {
        endSubject.next(value);
    },

    getFlashNotification: function () {
        return flashSubject.asObservable();
    },

    sendFlashNotification: function (value) {
        flashSubject.next(value);
    }
}