const fadeIn = 2000,
    fadeOut = 2000,
    delay = 1000,
    info = 'info',
    error = 'error',
    warn = 'warn';

class ErrorHandler {
    constructor(errorContainer) {
        this.errorContainer = errorContainer;
    }

    showInfo(message, severity) {
        $(this.errorContainer)
            .removeClass('error-container-info')
            .removeClass('error-container-warn')
            .removeClass('error-container-error');
        if (severity === error)
            $(this.errorContainer).addClass('error-container-error');
        else if (severity === info)
            $(this.errorContainer).addClass('error-container-info');
        else if (severity === warn)
            $(this.errorContainer).addClass('error-container-warn');

        $(this.errorContainer).html(message);
        $(this.errorContainer)
            .fadeIn(2000)
            .delay(1000)
            .fadeOut(2000, function() {
                $(this.errorContainer)
                    .removeClass('error-container-info')
                    .removeClass('error-container-warn')
                    .removeClass('error-container-error');
                $(this.errorContainer).addClass('error-container-info');
                $(this.errorContainer).empty();
            });
    }
}