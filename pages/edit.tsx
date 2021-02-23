import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useMagic, useUser } from '../context/UserContext';
import { Profile } from '../types';
import { API_URL } from '../utils/urls';
import { fromImageToUrl } from '../utils/urls';

import { Formik, Field, Form, FormikValues } from 'formik';
import * as Yup from 'yup';

import styles from '../styles/Edit.module.css';

/**
 * If the user is logged in, fetch their profile data
 * @param user
 */
const useInitialProfileData = (user, magic) => {
    const [profileData, setProfileData] = useState<Profile | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            if (!user) {
                return setProfileData(null);
            }

            try {
                const token = await magic.user.generateIdToken();
                const res = await fetch(`${API_URL}/profiles/my`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const profile = await res.json();
                setProfileData(profile);
            } catch (err) {
                setProfileData(null);
            }
        };
        fetchData();
    }, [user]);

    return profileData;
};

const EditProfilePage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const user = useUser();
    const magic = useMagic();

    const profileData = useInitialProfileData(user, magic);

    /**
     *  Input validation
     */
    const updateValidationSchema = Yup.object().shape({
        bio: Yup.string().required("Bio shouldn't be empty"),
        linkedin: Yup.string().required("LinkedIn shouldn't be empty"),
        github: Yup.string().required("GitHub shouldn't be empty"),
        preferred_salary: Yup.string().required("Preffered salary shouldn't be empty"),
        time_zone: Yup.string().required("Time zone shouldn't be empty")
    });

    /**
     *  Image upload to back end
     */
    const handleImageUpload = async (e) => {
        const token = await magic.user.generateIdToken();
        const image = e.target.files[0];

        if (image) {
            setUploadedImage(URL.createObjectURL(image));

            try {
                setLoading(true);

                const formData = new FormData();
                formData.append('image', image);

                const res = await fetch(`${API_URL}/profiles/`, {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                });
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
    };

    /**
     * If the user is logged in, update their profile
     * TODO FINALIZE
     * @param user
     */
    const updateUserData = async (updatedValues: FormikValues) => {
        try {
            setLoading(true);
            const updatedUser = Object.assign(user, updatedValues);
            const token = await magic.user.generateIdToken();

            const res = await fetch(`${API_URL}/profiles/`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedUser)
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    console.log('profileData', profileData);
    if (!user) {
        return (
            <div>
                <Header dark />
                Please Login first
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        );
    }

    if (!profileData) {
        return (
            <div>
                <Header dark />
                <h2>Loading your profile</h2>
            </div>
        );
    }

    return (
        <div>
            <Header dark />
            <h2 className={styles.title}>Edit your Profile</h2>

            <Formik
                initialValues={{
                    ...profileData
                }}
                validationSchema={updateValidationSchema}
                onSubmit={updateUserData}>
                <Form className={styles.updateForm}>
                    <div className={styles.imageContainer}>
                        <img
                            src={uploadedImage ? uploadedImage : fromImageToUrl(profileData.image)}
                        />
                        <input type="file" onChange={handleImageUpload} />
                    </div>
                    <Field name="name">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="I am a full-stack web developer..."
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.name}</div>
                            </div>
                        )}
                    </Field>
                    <Field name="bio">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Bio</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="I am a full-stack web developer..."
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.bio}</div>
                            </div>
                        )}
                    </Field>
                    <Field name="location">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Location</label>
                                <input type="text" required placeholder="London, UK" {...field} />
                                <div className={styles.warning}>{form.errors.location}</div>
                            </div>
                        )}
                    </Field>
                    <Field name="github">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>GitHub</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="https://github.com/..."
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.github}</div>
                            </div>
                        )}
                    </Field>
                    <Field name="linkedin">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>LinkedIn</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="https://www.linkedin.com/..."
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.linkedin}</div>
                            </div>
                        )}
                    </Field>

                    <Field name="preferred_salary">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Preffered Salary</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="$20-25 / hour..."
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.preferred_salary}</div>
                            </div>
                        )}
                    </Field>
                    <Field name="languages">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Languages</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="English, Spanish"
                                    {...field}
                                />
                                <div className={styles.warning}>{form.errors.languages}</div>
                            </div>
                        )}
                    </Field>

                    <Field name="time_zone">
                        {({ field, form }) => (
                            <div className={styles.formControl}>
                                <label>Time zone</label>
                                {/* <input type="text" required placeholder="CET..." {...field} /> */}
                                <select name="time_zone" {...field}>
                                    <option value="GMT">GMT (GMT+0:00)</option>
                                    <option value="UTC">UTC (GMT+0:00)</option>
                                    <option value="CET">CET (GMT+1:00)</option>
                                    <option value="EET">EET (GMT+1:00) </option>
                                    <option value="ART">ART (GMT+2:00)</option>
                                    <option value="EAT">EAT (GMT+3:00)</option>
                                    <option value="MET">MET (GMT+3:30)</option>
                                    <option value="NET">NET (GMT+4:00)</option>
                                    <option value="PLT">PLT (GMT+5:00)</option>
                                    <option value="IST">IST (GMT+5:30)</option>
                                    <option value="BST">BST (GMT+6:00)</option>
                                    <option value="VST">VST (GMT+7:00)</option>
                                    <option value="CTT">CTT (GMT+8:00)</option>
                                    <option value="JST">JST (GMT+9:00)</option>
                                    <option value="ACT">ACT (GMT+11:00)</option>
                                    <option value="AET">AET (GMT+10:00)</option>
                                    <option value="SST">SST (GMT+11:00)</option>
                                    <option value="NST">NST (GMT+12:00)</option>
                                    <option value="MIT">MIT (GMT-11:00)</option>
                                    <option value="HST">HST (GMT-10:00)</option>
                                    <option value="AST">AST (GMT-9:00)</option>
                                    <option value="PST">PST (GMT-8:00)</option>
                                    <option value="PNT">PNT (GMT-7:00)</option>
                                    <option value="MST">MST (GMT-7:00)</option>
                                    <option value="CST">CST (GMT-6:00)</option>
                                    <option value="EST">EST (GMT-5:00)</option>
                                    <option value="IET">IET (GMT-5:00)</option>
                                    <option value="PRT">PRT (GMT-4:00)</option>
                                    <option value="CNT">CNT (GMT-5:00)</option>
                                    <option value="AGT">AGT (GMT-3:00)</option>
                                    <option value="BET">BET (GMT-3:00)</option>
                                    <option value="CAT">CAT (GMT-1:00)</option>
                                </select>
                                <div className={styles.warning}>{form.errors.time_zone}</div>
                            </div>
                        )}
                    </Field>

                    <button type="submit" disabled={loading}>
                        Update Profile
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default EditProfilePage;
