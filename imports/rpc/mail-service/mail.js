
export class Mail {

  constructor(Provider, Config, { testing, templateId, substitutions }) {

    this.Provider      = Provider(Config.api.key);
    this.Config        = Config;
    this.testing       = testing;
    this.templateId    = templateId;
    this.substitutions = substitutions;

  }

  addRecipients(recipients) {

    this.recipients = recipients;

  }

  send() {

    const batch = this.applyRecipientsWithTemplateBatch();

    return false;

  }

  applyRecipientsWithTemplateBatch() {

    const batches = {
      raw:      [],
      requests: [],
    };

    this.recipients.forEach((recipient) => {

    });

  }

}
