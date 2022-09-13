import { View, Text, ScrollView, StyleSheet } from "react-native";
import PolicyButton from "./PolicyButton";

export default function PolicyOverlay({ type, close } = props) {
  const displayPolicy = () => {
    if (type === "clinic") {
      return (
        <View style={styles.container}>
          <Text style={styles.overlayTitle}>Privacy Policy</Text>
          <ScrollView style={styles.scroller}>
            <Text style={styles.title}>Arriving late</Text>
            <Text style={styles.description}>
              We understand that you can't always control when you can arrive.
              However, we need to be fair to every client and this means that if
              you are more than 20 minutes late for your appointment, we will be
              forced to cancel it and it will be treated as a missed
              appointment.
            </Text>
            <Text style={styles.title}>Rescheduling Your Appointment</Text>
            <Text style={styles.description}>
              ​You have up to 24hrs to reschedule your appointment online. With
              that said, we understand that things come up at the last minute
              that are out of your control. If you need to reschedule with less
              than 24hrs notice, give us a call and we'll do what we can to
              accommodate you - within reason. This means you cannot call an
              hour before your appointment to reschedule. If you do, this will
              be considered a missed appointment and treated as such. If last
              minute rescheduling becomes a habit, you will be notified that
              future reschedules will be treated like missed appointments.
            </Text>
            <Text style={styles.title}>
              Cancellations & Missed Appointments
            </Text>
            <Text style={styles.description}>
              We have a 24hr cancellation policy. You can cancel your
              appointment prior to the 24hr mark (meaning if your appointment
              was at 2pm on Tuesday, then you have until Monday at 2pm to
              cancel), online or by calling the clinic. All messages are time
              stamped. If you fail to give 24hrs notice, or do not show up for
              your appointment you will be required to pay for 50% of the
              treatment you would have received - for example, if you were
              having a 60 minute treatment you will have to pay $47.50. This
              payment will be required before or on your next appointment and is
              not payable through your insurance company. ​
            </Text>
            <Text style={styles.title}>
              Confidentiality and Privacy Policies
            </Text>
            <Text style={styles.description}>
              As a regulated health profession, we follow the same
              confidentiality and privacy policies as your family doctor or
              pharmacist. This means we will not share or sell your personal
              information without written consent from you. This includes
              discussing your treatment plan with your spouse, family members,
              or even your doctor/physiotherapist/chiropractor.
            </Text>
          </ScrollView>
          <PolicyButton title="Close" onPress={close} />
        </View>
      );
    }

    if (type === "privacy") {
      return (
        <View style={styles.container}>
          <Text style={styles.overlayTitle}>Privacy Policy</Text>
          <ScrollView style={styles.scroller}>
            <Text style={styles.overlaySubTitle}>
              The privacy of your personal information is important to us. We
              are committed to collecting, using, and disclosing personal
              information responsibly, only to the extent necessary for the
              goods and services we provide.
            </Text>
            <Text style={styles.title}>What is personal information?</Text>
            <Text style={styles.description}>
              Personal information includes information that relates to:{"\n"}
              <Text>
                - An individual’s personal characteristics (e.g., sex, gender,
                age, income, home address or telephone number, ethnic
                background, family status),{"\n"}
                <Text>
                  - Health (e.g., health history, health conditions, health
                  services received by other practitioners),{"\n"}
                </Text>
                <Text>
                  - Activities and views (e.g., opinions expressed by an
                  individual, an opinion or evaluation of an individual).{"\n"}
                </Text>
              </Text>
            </Text>
            <Text style={styles.title}>
              Primary reason for collecting information
            </Text>
            <Text style={styles.description}>
              Like all medical professionals, Müve Studio collects, uses, and
              discloses personal information in order to serve clients. The
              primary purpose for collecting personal information is to provide
              treatment. For example, we collect information about a client’s
              health history, including their family history, physical
              condition, and function in order to help with assessing what their
              health needs are, to advise them of their options, and then to
              provide the health care they choose to have.
            </Text>
            <Text style={styles.title}>
              Secondary reasons to collect information
            </Text>
            <Text style={styles.description}>
              Like most health care organizations, Müve Studio also collects,
              uses, and discloses information to invoice clients for services
              that were not paid for at the time of their appointment, to
              process credit card payments, or to submit claims on the clients
              behalf to insurance providers.{"\n"}
              ​We will never release your personal information to anyone for
              marketing purposes. We review client and other files for the
              purpose of ensuring quality services. In addition, external
              consultants (peer assessors, auditors) may, on our behalf, do
              audits, and continuing quality improvement reviews of our clinic,
              including reviewing client files. Registered Massage Therapists
              are regulated by the College of Massage Therapists of Ontario
              (CMTO). The CMTO may inspect our records and interview us as part
              of their regulatory activities in the public interest. External
              regulators (e.g., Canada Customs and Revenue Agency, Information
              and Privacy Commissioner, Human Rights Commission, etc.) have the
              authority to review our files and interview us as a part of their
              mandates. In these circumstances, we may consult with
              professionals (e.g., Lawyers, Accountants) who will investigate
              the matter and report back to us. The cost of goods/services
              provided by the organization to clients is often paid for by third
              parties (e.g., motor vehicle accident insurance, private
              insurance). These third party payers have the client’s consent or
              legislative authority to direct us to collect and disclose to them
              certain information in order to demonstrate client entitlement to
              this funding.
            </Text>
            <Text style={styles.title}>Protecting personal information</Text>
            <Text style={styles.description}>
              <Text>
                We understand the importance of protecting personal information.
                For that reason, Müve Studio has the following measures in place
                to keep your information protected: {"\n"}- All of our client
                information is stored digitally on a secured, cloud-based
                server, owned and operated by a third party company that is
                governed by the same privacy laws. {"\n"}- Electronic hardware
                is either under supervision or secure in a restricted area at
                all times. Paper information (when required) is transmitted
                through sealed, addressed envelopes or boxes by reputable
                companies. - Electronic information is transmitted either
                through a direct line or has identifiers removed or is
                encrypted. {"\n"}- External consultants and agencies with access
                to personal information must enter into privacy agreements with
                us.
              </Text>
            </Text>
            <Text style={styles.title}>
              Retention and Destruction of Personal Information
            </Text>
            <Text style={styles.description}>
              <Text>
                We retain personal information to ensure that we can answer any
                questions clients may have about the services provided and for
                accountability to external regulatory bodies. Müve Studio keeps
                clients files for ten year after the last date of service
                according to CMTO regulations. We destroy paper files that
                contain personal information by shredding. Electronic files are
                destroyed by the owner of the cloud-based server. No electronic
                files containing personal client information is stored on any
                electronic device used by Müve Studio
              </Text>
            </Text>
            <Text style={styles.title}>
              Your information is available to you
            </Text>
            <Text style={styles.description}>
              <Text>
                You have the right to see what personal information we hold
                about you. Müve Studio can help you identify what records we may
                have about you. We will also try to help you understand any
                information you do not understand (e.g., short forms, technical
                language or terms, etc.). We reserve the right to charge a
                nominal fee for providing copies of your file. If we cannot give
                you access (for legal reasons), we will notify you within 30
                days and give the reason as to why we cannot give you access. If
                you believe there is a mistake in the information in your file,
                you have the right to ask for it to be corrected. This applies
                to factual information and not to any professional opinions or
                assessment results.
              </Text>
            </Text>
          </ScrollView>
          <PolicyButton title="Close" onPress={close} continueButton={false} />
        </View>
      );
    }
  };

  return displayPolicy();
}

const styles = StyleSheet.create({
  overlayTitle: {
    fontFamily: "Raleway-Bold",
    fontSize: 22,
    marginBottom: 10,
  },
  overlaySubTitle: {
    fontFamily: "Raleway-Bold",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "justify",
  },
  title: {
    fontFamily: "Raleway-Regular",
    fontSize: 17,
    marginTop: 5,
  },
  description: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: "justify",
    fontFamily: "Raleway-Light",
  },
  scroller: {
    height: "100%",
    marginBottom: 10,
  },
  container: {
    height: "100%",
  },
});
