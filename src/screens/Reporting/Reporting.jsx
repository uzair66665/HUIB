import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Style";
import images from "../../assets/images";
import { CustomDropDown } from "../../components";
import { SvgXml } from "react-native-svg";
import { camera } from "../../assets/svg";
import {
  getActions,
  getTesters,
  getTrailerDolly,
  getTrailerDollyActions,
  getTrucks,
} from "../../utils/APIs/apis";

const Reporting = () => {
  const [isLoading, setisLoading] = useState(false);
  const [comments, setcomments] = useState("");

  const [selectedTester, setselectedTester] = useState(null);
  const [testers, settesters] = useState([]);

  const [selectedTruck, setselectedTruck] = useState(null);
  const [trucks, settrucks] = useState([]);

  const [selectedComplies, setselectedComplies] = useState(null);
  const booleanData = ["Yes", "No"];
  const [complies, setcomplies] = useState(booleanData);

  const [selectedAction, setselectedAction] = useState(null);
  const [actions, setactions] = useState([]);
  const [requiredAction, setrequiredAction] = useState("");

  const [selectedTrailerDolly, setselectedTrailerDolly] = useState(null);
  const [trailerDollys, settrailerDollys] = useState([]);

  const [selectedDollyAction, setselectedDollyAction] = useState(null);
  const [dollyActions, setdollyActions] = useState([]);
  const [requiredDollyAction, setrequiredDollyAction] = useState("");

  const [selectedReported, setselectedReported] = useState(null);
  const [reported, setreported] = useState(booleanData);

  const data = {
    PrimeMover: null,
    Reading: null,
    RequireAction: null,
    Comments: null,
    TrailerDolly: null,
    TrailerReading: null,
    TrailerRequireAction: null,
    Reported: null,
  };
  const [formData, setformData] = useState([data]);
  // ------------------------Testers Block Start------------------------------
  const onSelectTester = (item) => {
    setselectedTester(item);
  };
  //Function to fetch testers
  const fetchTesters = () => {
    setisLoading(true);
    getTesters()
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          //   console.log(JSON.stringify(response.data, null, 2));
          settesters(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };
  // ########################################################################

  // ------------------------Trucks Block Start------------------------------
  const onSelectTruck = (item) => {
    setselectedTruck(item);
  };
  //Function to fetch trucks
  const fetchTrucks = () => {
    setisLoading(true);
    getTrucks()
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          //   console.log(JSON.stringify(response.data, null, 2));
          settrucks(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };

  // ########################################################################
  // ------------------------Actions Block Start------------------------------
  const onSelectAction = (item) => {
    setselectedAction(item);
    setrequiredAction(item.Actions);
  };
  //Function to fetch actions
  const fetchActions = () => {
    setisLoading(true);
    getActions()
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          //   console.log(JSON.stringify(response.data, null, 2));
          setactions(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };
  // ########################################################################
  // ------------------------Trailer Dolly Block Start------------------------------
  const onSelectTrailerDolly = (item) => {
    setselectedTrailerDolly(item);
  };
  //Function to fetch actions
  const fetchTrailerDollys = () => {
    setisLoading(true);
    getTrailerDolly()
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          //   console.log(JSON.stringify(response.data, null, 2));
          settrailerDollys(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };
  // ########################################################################
  // ------------------------Actions Block Start------------------------------
  const onSelectDollyAction = (item) => {
    setselectedDollyAction(item);
    setrequiredDollyAction(item.Actions);
  };
  //Function to fetch actions
  const fetchDollyActions = () => {
    setisLoading(true);
    getTrailerDollyActions()
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          //   console.log(JSON.stringify(response.data, null, 2));
          setdollyActions(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTesters();
    fetchTrucks();
    fetchActions();
    fetchTrailerDollys();
    fetchDollyActions();
  }, []);

  const onSelectComplies = (item) => {
    setselectedComplies(item);
  };
  const onSelectReported = (item) => {
    setselectedReported(item);
  };

  const ReArrangingForm = () => {
    setformData([...formData, data]);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 1000,
          }}
        >
          <View>
            {/* Heading  */}
            <Text style={styles.mainHeading}>
              Hub Temperature Reporting App
            </Text>
            {/* Form 1 */}
            <View style={styles.form1}>
              {/* Tester */}
              <Text style={styles.label}>Tester</Text>
              <CustomDropDown
                value={selectedTester}
                data={testers}
                onSelect={onSelectTester}
              />

              {/* Truck */}
              <Text style={styles.label}>Truck</Text>
              <CustomDropDown
                value={selectedTruck}
                data={trucks}
                onSelect={onSelectTruck}
              />

              {/* Date/Time */}
              <Text style={styles.label}>Date/Time</Text>
              <Text style={styles.time}>{}</Text>

              {/* Complies */}
              <Text style={styles.label}>Complies</Text>
              <CustomDropDown
                value={selectedComplies}
                data={complies}
                onSelect={onSelectComplies}
              />
            </View>
          </View>
          <Image source={images.logo} />
        </View>

        <View style={styles.separator} />

        {/* Form 2 */}
        {formData.map((item, index) => {
          return (
            <View key={index} style={styles.form2}>
              <View style={[styles.form1, { zIndex: 900 }]}>
                {/* Tester */}
                <View>
                  <Text style={styles.label}>Prime</Text>
                  <Text style={styles.label}>Mover</Text>
                </View>
                <CustomDropDown
                  value={selectedTester}
                  data={testers}
                  onSelect={onSelectTester}
                />

                {/* Truck */}
                <Text style={styles.label}>Reading</Text>
                <CustomDropDown
                  value={selectedAction}
                  data={actions}
                  onSelect={onSelectAction}
                />

                {/* Required  Action */}
                <View>
                  <Text style={styles.label}>Required</Text>
                  <Text style={styles.label}>Action</Text>
                </View>
                <TextInput
                  multiline={true}
                  editable={false}
                  style={styles.time}
                  value={requiredAction}
                />

                {/* Comments */}
                <Text style={styles.label}>Comments</Text>
                <TextInput
                  onChangeText={(t) => setcomments(t)}
                  multiline={true}
                  style={[styles.time, { flex: 1, textAlign: "left" }]}
                  value={comments}
                />
              </View>

              <View style={[styles.form1, { zIndex: 800 }]}>
                {/* Trailer Dolly */}
                <View>
                  <Text style={styles.label}>Trailer</Text>
                  <Text style={styles.label}>Dolly</Text>
                </View>
                <CustomDropDown
                  value={selectedTrailerDolly}
                  data={trailerDollys}
                  onSelect={onSelectTrailerDolly}
                />

                {/* Reading */}
                <Text style={styles.label}>Reading</Text>
                <CustomDropDown
                  value={selectedDollyAction}
                  data={dollyActions}
                  onSelect={onSelectDollyAction}
                />

                {/* Required  Action */}
                <View>
                  <Text style={styles.label}>Required</Text>
                  <Text style={styles.label}>Action</Text>
                </View>
                <TextInput
                  multiline={true}
                  editable={false}
                  style={styles.time}
                  value={requiredDollyAction}
                />

                {/* Date/Time */}
                <Text style={styles.label}>Reported</Text>
                <CustomDropDown
                  value={selectedReported}
                  data={reported}
                  onSelect={onSelectReported}
                />

                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
            </View>
          );
        })}

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => ReArrangingForm()}
              style={[styles.button, styles.buttonPrimary]}
            >
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
            <Image style={styles.camera} source={images.camera} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={[styles.button, styles.buttonSave]}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Reporting;
