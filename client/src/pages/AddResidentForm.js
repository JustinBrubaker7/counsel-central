import React, { useState, useContext, useRef, useEffect } from "react";
import AuthContext from "../context/auth-context";
import API from '../utils/API'
import SuccessModal from '../components/SuccessModal/SuccessModal'

const AddResidentForm = () => {

  const authCtx = useContext(AuthContext)

  const [counselors, setCounselors] = useState([])
  const [success, setSuccess] = useState(false)

  const resident_firstNameRef = useRef();
  const resident_lastNameRef = useRef();
  const ageRef = useRef();
  const dobRef = useRef();
  const phoneNumberRef = useRef();
  const counselorRef = useRef()
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();
  const allergiesRef = useRef();
  const genderRef = useRef();
  const disabledRef = useRef();
  const disabled_explanationRef = useRef();
  const emergencyContact_FirstNameRef = useRef();
  const emergencyContact_LastNameRef = useRef();
  const emergencyContact_phoneRef = useRef();
  const contactRelationshipRef = useRef();
  const relationship_addressRef = useRef();
  const relationship_cityRef = useRef();
  const relationship_stateRef = useRef();
  const relationship_zipCodeRef = useRef();
  const drug_choiceRef = useRef();
  const years_usedRef = useRef();
  const sobriety_lengthRef = useRef();
  const hasDetoxedRef = useRef();

  async function fetchResidentHandler(id) {
    const getData = await API.getCounselors(id)
    const data = await getData.data
    setCounselors(data)
  }

  useEffect(() => {
    fetchResidentHandler(authCtx.center_id)
  }, [authCtx])


  const submitResidentHandler = (event) => {
    event.preventDefault();
    setSuccess(false)

    const eneteredFirstName = resident_firstNameRef.current.value;
    const enteredLastName = resident_lastNameRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredDob = dobRef.current.value;
    const enteredPhone = phoneNumberRef.current.value;
    const enteredCounselor = counselorRef.current.value;
    const entereedAdress = addressRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredState = stateRef.current.value;
    const enteredZipCode = zipCodeRef.current.value;
    const enteredAllergies = allergiesRef.current.value;
    const enteredGender = genderRef.current.value;
    const enteredDisabled = disabledRef.current.value;
    const enteredDiabledExplination = disabled_explanationRef.current.value;
    const emergencyContactFirstName = emergencyContact_FirstNameRef.current.value;
    const emergencyContactLastName = emergencyContact_LastNameRef.current.value;
    const enteredEmergecyPhone = emergencyContact_phoneRef.current.value;
    const constactRelationsip = contactRelationshipRef.current.value;
    const enteredRelationshipAdress = relationship_addressRef.current.value;
    const enteredRelationshipCity = relationship_cityRef.current.value;
    const enteredRelationshipState = relationship_stateRef.current.value;
    const enteredRelationshipZipCode = relationship_zipCodeRef.current.value;
    const enteredDrugOfChoice = drug_choiceRef.current.value;
    const enteredYearsUsed = years_usedRef.current.value;
    const enteredSoberityLength = sobriety_lengthRef.current.value;
    const enteredHasDetoxed = hasDetoxedRef.current.value;
    //validation

    fetch('http://localhost:3001/api/resident/create', {
      method: 'POST',
      body: JSON.stringify({
        center_id: authCtx.center_id,
        counselor_id: enteredCounselor,
        resident_firstName: eneteredFirstName,
        resident_lastName: enteredLastName,
        age: enteredAge,
        DOB: enteredDob,
        phoneNumber: enteredPhone,
        address: entereedAdress,
        city: enteredCity,
        state: enteredState,
        zipCode: enteredZipCode,
        allergies: enteredAllergies,
        gender: enteredGender,
        disabled: enteredDisabled,
        disabled_explanation: enteredDiabledExplination,
        emergencyContact_firstName: emergencyContactFirstName,
        emergencyContact_lastName: emergencyContactLastName,
        emergencyContact_phone: enteredEmergecyPhone,
        contactRelationship: constactRelationsip,
        relationship_address: enteredRelationshipAdress,
        relationship_city: enteredRelationshipCity,
        relationship_state: enteredRelationshipState,
        relationship_zipCode: enteredRelationshipZipCode,
        drug_choice: enteredDrugOfChoice,
        years_used: enteredYearsUsed,
        sobriety_length: enteredSoberityLength,
        hasDetoxed: enteredHasDetoxed,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'resident faild!'
          console.log(data)
          alert(errorMessage)
          throw new Error(errorMessage)
        })
      }
    }).then((data) => {
      successtimer()

    })
  }

  const successtimer = () => {
    setSuccess(true)
    setTimeout(function () { setSuccess(false) }, 4000);
  }




  return (
    <>
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-md shadow-sm m-6">
        {success && <SuccessModal title={"Resident Successfully Added!"} subtitle={"The resident was added and you can now view in poplog."} className="mt-12" />}
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={submitResidentHandler}>
          <div className="">
            <div>
              <div>
                <h2 className="text-xl leading-6 font-medium text-gray-900">
                  Add a new resident
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Sign up a new resident to you program. Make sure to assign
                  them to a couselor
                </p>
              </div>
            </div>
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={resident_firstNameRef}
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={resident_lastNameRef}
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <div className="mt-1">
                    <input
                      ref={ageRef}
                      id="age"
                      name="age"
                      type="number"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <div className="mt-1">
                    <input
                      ref={dobRef}
                      id="dob"
                      name="dob"
                      type="date"
                      autoComplete="date"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      ref={phoneNumberRef}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <div className="mt-1">
                    <input
                      ref={addressRef}
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      ref={cityRef}
                      type="text"
                      name="city"
                      id="city"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      ref={stateRef}
                      type="text"
                      name="state"
                      id="state"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <div className="mt-1">
                    <input
                      ref={zipCodeRef}
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="postal-code"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* This needs to call from Database and loop through center couselors */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="counselor"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Counselor
                  </label>
                  <select
                    ref={counselorRef}
                    id="counselor"

                    name="counselor"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue="Amanda Ringer"
                  >
                    {counselors.map((counselor) => (
                      <option key={counselor.id} value={counselor.id}>
                        {counselor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="allergies"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Allergies
                  </label>
                  <div className="mt-1">
                    <input
                      ref={allergiesRef}
                      type="text"
                      name="allergies"
                      id="allergies"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    ref={genderRef}
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="isDisabled"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Does the resident you have a disablility
                  </label>
                  <select
                    ref={disabledRef}
                    id="isDisabled"
                    name="isDisabled"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not applicable</option>
                  </select>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="disabled_explain"
                    className="block text-sm font-medium text-gray-700"
                  >
                    If yes, explain
                  </label>
                  <div className="mt-1">
                    <input
                      ref={disabled_explanationRef}
                      type="text"
                      name="disabled_explain"
                      id="disabled_explain"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h2 className="text-xl leading-6 font-medium text-gray-900">
                    Emergency Contact
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Provide information about the residents emergency contact
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name_emergency"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={emergencyContact_FirstNameRef}
                      type="text"
                      name="first_name_emergency"
                      id="first_name_emergency"
                      autoComplete="given-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name_emergency"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={emergencyContact_LastNameRef}
                      type="text"
                      name="last_name_emergency"
                      id="last_name_emergency"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="emergency_phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      ref={emergencyContact_phoneRef}
                      id="emergency_phone"
                      name="emergency_phone"
                      type="tel"
                      autoComplete="tel"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="relationship"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Relationship
                  </label>
                  <select
                    ref={contactRelationshipRef}
                    id="relationship"
                    name="relationship"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option>Parent</option>
                    <option>Spouse</option>
                    <option>Child</option>
                    <option>Grandparent</option>
                    <option>Sibling</option>
                    <option>Friend</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <div className="mt-1">
                    <input
                      ref={relationship_addressRef}
                      type="text"
                      name="street_address"
                      id="street_address"
                      autoComplete="street-address"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      ref={relationship_cityRef}
                      type="text"
                      name="city"
                      id="city"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      ref={relationship_stateRef}
                      type="text"
                      name="state"
                      id="state"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <div className="mt-1">
                    <input
                      ref={relationship_zipCodeRef}
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="postal-code"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div>
                  <h2 className="text-xl leading-6 font-medium text-gray-900">
                    Drug History
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Provide information about the residents drug history
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="drug_of_choice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Drug of choice
                  </label>
                  <div className="mt-1">
                    <input
                      ref={drug_choiceRef}
                      type="text"
                      name="drug_of_choice"
                      id="drug_of_choice"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="years_using"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Years using
                  </label>
                  <div className="mt-1">
                    <input
                      ref={years_usedRef}
                      id="years_using"
                      name="years_using"
                      type="number"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_used"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last time used
                  </label>
                  <input
                    ref={sobriety_lengthRef}
                    id="last_used"
                    name="last_used"
                    type="date"
                    autoComplete="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="hasDetoxed"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Has the resident detoxed
                  </label>
                  <select
                    ref={hasDetoxedRef}
                    id="hasDetoxed"
                    name="hasDetoxed"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue=""
                  >
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not applicable</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-honolulu hover:bg-honolulu-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Resident
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddResidentForm;
