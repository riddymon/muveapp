import { Image, View, Text, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
import Swirl from "../assets/images/swirl.svg";
import ColoredLine from "../components/Separator";
import CollapsibleList from "react-native-collapsible-list";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.headerImage}>
          <ImageBackground
            style={styles.headerBackground}
            source={require("../assets/images/studio.png")}
          >
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.homeTitle}>
                  Müve Registered Massage Therapy Studio
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Live in the Müvement</Text>
          <View style={styles.swirl}>
            <Swirl width={200} height={40} opacity={0.8} />
          </View>
          <Text style={styles.description}>
            The basic philosophy of Müve embraces the concept of vis Medicatrix
            naturae, which is aiding the ability of the body to heal itself by
            increasing health and well-being through touch.
          </Text>
          <ColoredLine color={Colors.black} />
          <Text style={styles.title}>Müve Towards....</Text>
          <View style={styles.swirl}>
            <Swirl width={200} height={40} opacity={0.8} />
          </View>
          <View style={styles.contentList}>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{"\u2B24"}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text style={styles.bulletTextItem}>
                  {"    "}
                  Reducing or eliminating pain
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{"\u2B24"}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text style={styles.bulletTextItem}>
                  {"    "}
                  Improving joint mobility
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{"\u2B24"}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text style={styles.bulletTextItem}>
                  {"    "}
                  Improving lymphatic drainage
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{"\u2B24"}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text style={styles.bulletTextItem}>
                  {"    "}
                  Reducing muscular tension
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.description}>
            Treatments provided by a Registered Massage Therapist at Müve Studio
            can offer significant benefits for a variety of conditions and for
            diverse patient populations.{"\n\n"}Whether you need to have a
            moment of relaxation, reduce muscle tension or attain relief from
            acute or chronic pain, massage therapy can enhance your overall
            well-being. It can help alleviate musculoskeletal disorders
            associated with everyday stress, muscular overuse, physical
            manifestation of mental distress and many persistent pain syndromes.
          </Text>
          <ColoredLine color={Colors.black} />
          <Text style={styles.buttonInstructions}>
            Tap the topics below to learn more!
          </Text>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonPosition="top"
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>
                  Benefits of Massage Therapy
                </Text>
              </View>
            }
          >
            <View style={styles.collapsibleItem}>
              <Text style={styles.itemDescription}>
                Massage therapy consists primarily of hands-on manipulation of
                the soft tissues of the body, specifically, the muscles,
                connective tissue, tendons, ligaments and joints for the purpose
                of optimizing health. Massage therapy treatment has a
                therapeutic effect on the body and optimizes health and
                well-being by acting on the muscular, nervous and circulatory
                systems. Physical function can be developed, maintained and
                improved; and physical dysfunction and pain and the effects of
                stress can be relieved or prevented.
              </Text>

              <Text style={styles.itemTitle}>Benefits of Massage Therapy</Text>

              <Text style={styles.itemDescription}>
                Treatments provided by a Registered Massage Therapist can offer
                significant benefits for a variety of conditions and for diverse
                patient populations. Whether you need to have a moment of
                relaxation, reduce muscle tension or attain relief from acute or
                chronic pain, massage therapy can enhance your overall
                well-being. It can help alleviate musculoskeletal disorders
                associated with everyday stress, muscular overuse, physical
                manifestation of mental distress and many persistent pain
                syndromes.
              </Text>
              <Text style={styles.itemTitle}>
                Massage therapy can be an important part of your health
                maintenance plan by:
              </Text>
              <View style={styles.itemBulletContentList}>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Reducing or eliminating pain
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Improving joint mobility
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Improving lymphatic drainage
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Reducing muscular tension
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.itemTitle}>
                Massage therapy can prove beneficial to many conditions,
                including but not limited to the following:
              </Text>
              <View style={styles.itemBulletContentList}>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Anxiety and Depression
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Arthritis
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Asthma and Emphysema
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Cancer
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Carpal Tunnel Syndrome
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Chronic Fatigue Syndrome
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Dislocations
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Edema
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Fibromyalgia
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Headaches
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Inflammatory Conditions
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Insomnia
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Lymphoedema
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Multiple Sclerosis
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Muscle Tension and Spasm
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Parkinson's Disease
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Plantar Fasciitis
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Post-Surgical Rehabilitation
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Post-Traumatic Stress Disorder (PTSD)
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Pregnancy and Labor Support
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Sciatica
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Scoliosis
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Sports Injuries
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Strains and Sprains
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Stress and Stress-Related Conditions
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Stroke
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Tendinitis
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      TMJ Issues
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Whiplash
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.itemTitle}>
                Massage therapy can also be used as part of a preventative care
                program. This includes sports training, injury prevention,
                ongoing stress management and more!{" "}
              </Text>
              <Text style={styles.itemTitle}>
                An overall picture of your current health and a detailed health
                history will be included in the initial intake in order to
                design a treatment plan that’s right for you. If it is
                determined that your condition would be better treated by
                another healthcare professional, the appropriate referral will
                be made.
              </Text>
            </View>
          </CollapsibleList>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonPosition="top"
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>What To Expect</Text>
              </View>
            }
          >
            <View style={styles.collapsibleItem}>
              <Text style={styles.itemTitle}>Before your appointment</Text>
              <Text style={styles.itemDescription}>
                Before your appointment, talk to us about any concerns you have
                regarding your body and discuss the pressure you prefer. Your
                therapist will check in during the massage, but if you feel
                uncomfortable or want them to try a different pressure, speak
                up. Let your therapist know if there are any places you want
                them to use a different type of pressure on or avoid altogether.
                Voice your intentions for the massage. A massage to relieve deep
                muscle knots will be quite different from a massage to stimulate
                relaxation, so keep this in mind. It’s also important to let
                your therapist know if you have any medical concerns or injuries
              </Text>
              <Text style={styles.itemTitle}>
                What to Expect During Your Treatment{" "}
              </Text>
              <Text style={styles.itemDescription}>
                ​When you begin your treatment, you will meet with your massage
                therapists and answer a few questions pertaining to your health
                history. These questions will help to direct your best course of
                treatment. Your RMT may perform a few clinical tests to assess
                and determine the potential root cause of your concerns. This is
                important because the problem area is not always where the pain
                is!!{"\n\n"}Once you and your therapist have determined a
                treatment plan, your RMT will allow you time to get comfortable
                on the table before treatment begins! Massage therapists often
                work directly on the skin, removing clothing barriers, which
                allows them to adequately assess and feel the soft-tissues
                beneath their hands. However, this is not always necessary!
                Depending on your condition, your treatment plan and use of the
                most effective techniques to assist, it may be better for your
                therapist to work through your clothing or your RMT may ask you
                to wear loose fitting clothing. It is important that you are
                very comfortable throughout your treatment and your RMT will
                ensure that this is always the case.{"\n\n"}​Your therapist will
                ensure maximum privacy during the treatment using sheets and
                educated draping techniques to maintain your comfort level as
                this is always our top priority!
              </Text>
              <Text style={styles.itemTitle}>
                What to Expect After your Massage Therapy Appointment
              </Text>
              <Text style={styles.itemDescription}>
                Each treatment will vary. There are side effects with having a
                massage therapy treatment. A side effect you might experience is
                delayed onset muscle soreness. This can occur for 24-48 hours
                post treatment as your body is adjusting to the muscles being
                treated. The techniques carry blood and nutrients to your
                muscles while eliminating toxins. This is a physical response to
                the inflammation as your body heals.{"\n\n"}You are advised to
                apply deep moist heat or an Epsom salts bath (if you do not have
                conditions in which this may be contraindicated). If you haven’t
                had a massage recently or if it’s your first one, it’s more
                likely that you will feel sore afterward. Your body will create
                muscle memory if you have frequent massages, so aim to be
                regular with your sessions when possible Communication It’s
                important to establish open communication with your therapist.
              </Text>
            </View>
          </CollapsibleList>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonPosition="top"
            buttonContent={
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>Modality Info</Text>
              </View>
            }
          >
            <View style={styles.collapsibleItem}>
              <Text style={styles.itemDescription}>
                ​There are many modalities that can be incorporated into your
                massage depending on what your goals are. I will suggest, and
                you may request certain modalities depending on what you are are
                looking to achieve out of your massage.
              </Text>
              <View style={styles.itemBulletContentList}>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Deep tissue massage
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Trigger point therapy
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Joint mobilization
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      PNF stretching
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Cupping
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Facial release
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Hydrotherapy
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Sports massage
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Relaxation massage
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Scar therapy
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.itemDescription}>
                Contact us to discuss your specific needs and to learn how we
                can customize a treatment plan for you. ​ ​ ​​ ​​ ​​ ​​ ​​ ​​ ​​
                ​​
              </Text>
              <Text style={styles.itemTitle}>Deep tissue massage</Text>
              <Text style={styles.itemDescription}>
                Deep tissue massage is typically used for those experiencing
                chronic muscle tension. It is comparable to Swedish massage but
                performed in deeper layers of the tissue. For some people, this
                therapy can be uncomfortable during the treatment but the
                results are highly effective. This method of massage helps to
                realign tight muscle fibers and connective tissues to decrease
                muscle tension, decrease pain and increase range of motion.
              </Text>
              <Text style={styles.itemTitle}>Trigger point therapy</Text>
              <Text style={styles.itemDescription}>
                ​Trigger points, or what is referred to as “knots” are small
                muscle contractions that present as palpable nodules within a
                tight band of muscle. These nodules can create local pain or
                refer pain to another area of the body. For example, many people
                develop trigger points in the lower neck and shoulders that
                present as neck pain and tension headaches. These points
                restrict the muscle from moving through its full range of
                motion, resulting in pain and discomfort. Trigger point therapy
                is an application of pressure to a nodule for up to two minutes
                or until pain has subsided to release the muscle restrictions. ​
              </Text>
              <Text style={styles.itemTitle}>Joint mobilization</Text>
              <Text style={styles.itemDescription}>
                Joint mobilization is used to increase the joint’s range of
                motion. Joints that are restricted can lead to:{" "}
              </Text>
              <View style={styles.itemBulletContentList}>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Pain
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Dysfunction and conditions such as arthritis and joint
                      degeneration
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.itemDescription}>
                This form of therapy is not meant to be painful and the
                therapist will work to your tolerance.
              </Text>
              <Text style={styles.itemTitle}>PNF stretching</Text>
              <Text style={styles.itemDescription}>
                ​PNF stands for proprioceptive neuromuscular facilitation. This
                is known as one of the most effective forms of muscle
                stretching. PNF is performed passively by a trainer or therapist
                to increase range of motion of a specific muscle group or joint.
              </Text>
              <Text style={styles.itemTitle}>Cupping</Text>
              <Text style={styles.itemDescription}>
                Cupping originated in ancient Chinese medicine with use of glass
                or silicone cups that create a suction of the fascia inward.
                This brings blood flow to a specific area to aid the healing
                process, relieve muscle tension and reduce inflammation. Cupping
                is not intended to be a painful treatment, but can sometimes be
                uncomfortable especially when working with tight and tender
                muscles. Cupping can leave circular “bruise like” marks on the
                skin that may last a few days to a couple weeks. However, unlike
                a bruise, these cupping marks are due to a release of unwanted
                toxins from the tissue not from tissue injury.{" "}
              </Text>
              <Text style={styles.itemTitle}>Sports massage</Text>
              <Text style={styles.itemDescription}>
                Sports massage is used for athletes looking to improve
                performance, recover from an injury or improve muscular
                imbalances. This form of massage therapy tends to be deeper in
                nature and can be used for rehab or preventative purposes. ​
              </Text>
              <Text style={styles.itemTitle}>Relaxation massage</Text>
              <Text style={styles.itemDescription}>
                Relaxation massage is a gentle Swedish technique used to
                decrease activity of the sympathetic nervous system. This can
                help with:
              </Text>
              <View style={styles.itemBulletContentList}>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Stress and anxiety
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Lymph drainage
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Blood circulation
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Muscles soreness
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRow}>
                  <View style={styles.bullet}>
                    <Text>{"\u2B24"}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text style={styles.bulletTextItem}>
                      {"    "}
                      Digestion
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.itemDescription}>
                It is common for patients to fall asleep during this treatment
                which is a great way for the body to completely relax, unwind
                and de-stres
              </Text>
              <Text style={styles.itemTitle}>Myfascial release</Text>
              <Text style={styles.itemDescription}>
                Myofascial release applies sustained pressure on targeted areas
                of connective tissue (fascia) that surround your muscles and
                bones. This pressure releases the restriction in the connective
                tissue so that you have greater range of motion and less pain.
              </Text>
              <Text style={styles.itemTitle}>Hydrotherapy</Text>
              <Text style={styles.itemDescription}>
                Hydrotherapy is the use of heat and cold for therapeutic
                effects. Hydrotherapy has been used throughout history in the
                form of healing baths and hot springs, and is still commonly
                applied in the form of heat and ice packs. The effects of
                hydrotherapy vary depending on the temperature, how it is
                applied, and length of application.{" "}
              </Text>
              <Text style={styles.itemTitle}>Chair Massage</Text>
              <Text style={styles.itemDescription}>
                The term "Chair Massage" describes the type of massage that is
                performed while the client sits fully clothed in a special
                chair.
              </Text>
              <Text style={styles.itemTitle}>
                Indian Head Massage - Coming soon!
              </Text>
              <Text style={styles.itemDescription}>
                Indian head massage, also known as champissage, is a treatment
                that focuses on massaging acupressure points along the head,
                neck, and shoulders, often using circular massage strokes to
                improve hair and scalp condition. Indian head massage can not
                only reduce headaches and improve physical well-being, but it
                can also improve mental and emotional wellness too.
              </Text>
            </View>
          </CollapsibleList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.white,
  },
  headerImage: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.inactiveGrey,
  },

  homeTitle: {
    fontFamily: "Raleway-Regular",
    fontSize: 18,
    textAlign: "center",
    color: Colors.activeGreen,
  },

  headerBackground: {
    width: "100%",
    height: "100%",
  },

  headerContainer: {
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 40,
    display: "flex",
    justifyContent: "center",
    backgroundColor: Colors.inactiveGrey,
  },

  title: {
    fontFamily: "Roboto-Light",
    fontSize: 22,
    textAlign: "center",
    marginTop: 18,
  },

  swirl: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  description: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    marginHorizontal: 15,
    textAlign: "justify",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
    marginStart: 10,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    // flex: 1,
  },
  bulletTextItem: {
    fontFamily: "Roboto-Light",
    fontSize: 18,
  },
  contentList: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: "15%",
    marginBottom: 10,
  },
  collapseContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#ECECEC",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.white,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.activeGreen,
  },

  buttonTitle: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
  },

  buttonInstructions: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    fontFamily: "Roboto-Thin",
  },

  itemTitle: {
    fontFamily: "Raleway-Bold",
    fontSize: 16,
    marginBottom: 5,
  },

  itemDescription: {
    fontFamily: "Raleway-Light",
    fontSize: 16,
    marginBottom: 15,
  },
  bulletTextItem: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
  },
  itemRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginStart: 10,
  },
  itemBulletContentList: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 15,
  },
  mainContent: {
    marginBottom: 10,
  },
});
