from django.shortcuts import render
from bs4 import BeautifulSoup
from django.http import HttpResponse
from urllib.request import Request, urlopen
from selenium import webdriver
import requests
from selenium.webdriver.chrome.options import Options

def collectData(request):

    path = '/Users/mohamed/Downloads/chromedriver'

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    response = requests.get('https://www.timeshighereducation.com/sites/default/files/the_data_rankings/world_university_rankings_2022_0__e7070f0c2581be5fe6ab6392da206b36.json', headers=headers)

    data = response.json()
    #print(data['data'][0]['rank'])
    for u in data['data'][:20]:
        desc = ''
        url = "https://www.timeshighereducation.com" + u['url']

        browser.get(url)
        soup = BeautifulSoup(browser.page_source, "lxml")
        results = soup.find('div', {'class': 'read-more-processed'})
        if results is not None:
            parags = results.find_all('p')
            if parags is not None:
                for p in parags:
                    desc = desc + ' ' + p.text

        University.objects.get_or_create(name = u['name'], rank=u['rank'], rank_order=u['rank_order'], description = desc, institute_type = '', campus_settings = '' , student_body_size = u['stats_number_students'].replace(',', ''), prince_range ='', scores_overall = u['scores_overall'], scores_teaching = u['scores_teaching'], scores_teaching_rank = u['scores_teaching_rank'], scores_research = u['scores_research'], scores_citations = u['scores_citations'], scores_industry_income = u['scores_industry_income'], scores_industry_income_rank = u['scores_industry_income_rank'], scores_international_outlook = u['scores_international_outlook'], scores_international_outlook_rank = u['scores_international_outlook_rank'], location = u['location'], city='', stats_student_staff_ratio = u['stats_student_staff_ratio'], stats_pc_intl_students = u['stats_pc_intl_students'], stats_female_male_ratio = u['stats_female_male_ratio'], subjects_offered = u['subjects_offered'], closed = u['closed'], unaccredited = u['unaccredited'])

    return HttpResponse('data')

def collectScholarships(request):
    path = '/Users/mohamed/Downloads/chromedriver'

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    #response = requests.get('https://www.internationalscholarships.com/scholarships', headers=headers)
    url_number = "https://www.internationalscholarships.com/scholarships?per-page=30"
    url = "https://www.internationalscholarships.com/scholarships"

    browser.get(url_number)
    soup = BeautifulSoup(browser.page_source, "lxml")

    results = soup.find_all('tr', {'class': ''})
    #print(results)
    # for r in results:
    #     print(r.find_all('td'))



    import requests

    cookies = {
        '__gads': 'ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw',
        'cookieconsent_status': 'dismiss',
        '__gpi': 'UID=000009875f769037:T=1656680701:RT=1657272966:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA',
        '_gid': 'GA1.2.1806460644.1657272967',
        '_gat_UA-12565915-9': '1',
        'PHPSESSID': '696f65b672e42d8809ece4586c230bb9',
        '_csrf': 'b6ac7bddf45a2e00f7a34963eb8bb2070c3fd86c36067d9a6cb74824cea1793ea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22C6niMZMAh3lJoUBsVtfPfkc0At6E3PRE%22%3B%7D',
        '_ga_KXQ425PMLX': 'GS1.1.1657272967.12.1.1657272985.0',
        '_ga': 'GA1.1.2120178691.1656680701',
    }

    headers = {
        'authority': 'www.internationalscholarships.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en,en-US;q=0.9,fr;q=0.8',
        'cache-control': 'max-age=0',
        # Requests sorts cookies= alphabetically
        # 'cookie': '__gads=ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw; cookieconsent_status=dismiss; __gpi=UID=000009875f769037:T=1656680701:RT=1657272966:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA; _gid=GA1.2.1806460644.1657272967; _gat_UA-12565915-9=1; PHPSESSID=696f65b672e42d8809ece4586c230bb9; _csrf=b6ac7bddf45a2e00f7a34963eb8bb2070c3fd86c36067d9a6cb74824cea1793ea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22C6niMZMAh3lJoUBsVtfPfkc0At6E3PRE%22%3B%7D; _ga_KXQ425PMLX=GS1.1.1657272967.12.1.1657272985.0; _ga=GA1.1.2120178691.1656680701',
        'referer': 'https://www.internationalscholarships.com/login',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    }


    for r in results[1:]:
        tds = r.find_all('td')[0]

        link0 = tds.find('a').get('href')
        print(link0)

        response = requests.get(url + link0, cookies=cookies, headers=headers)
        detail_soup = BeautifulSoup(response.content, "html.parser")
        title = detail_soup.find('h1', {'class': 'title'})


        div_desc = detail_soup.find('div', {'class': 'award-description'})

        #description
        description = div_desc.find_all('p')[0].text

        #moreinfo
        try:
            more_info = div_desc.find_all('p')[1].text
        except:
            more_info = None

        list_extra = detail_soup.find_all('div', {'class': "clear {class}"})
        list_indxs = []
        list_items = []

        for i in list_extra:
            list_indxs.append(i.find('h4').text)
            list_items.append(i.find('p').text)

        dictionary = dict(zip(list_indxs,list_items))
        print(dictionary)
        amount = dictionary['Amount'] if 'Amount' in dictionary else None
        application_deadline = dictionary['Deadline'] if 'Deadline' in dictionary else None
        nationality_requirements = dictionary['You must be studying in one of the following countries:'] if 'You must be studying in one of the following countries:' in dictionary else None
        award_ammount = dictionary['Number of Awards'] if 'Number of Awards' in dictionary else None

        applicable_majors = dictionary['You must be studying one of the following:'] if 'You must be studying one of the following:' in dictionary else None
        host_institution = dictionary['Host Institution'] if 'Host Institution' in dictionary else None
        includes = dictionary['Includes'] if 'Includes' in dictionary else None

        list_indxs_contact = []
        list_items_contact = []
        contact = detail_soup.find('table', {'id': 'w4'})
        indexes_contact = contact.find_all('th')
        contact_info = contact.find_all('td')

        for i in contact_info:
            if i.text == 'View Website':
                list_items_contact.append(i.find('a').get('href'))
            else:
                list_items_contact.append(i.text)

        for i in indexes_contact:
            list_indxs_contact.append(i.text)

        contact_dictionary = dict(zip(list_indxs_contact,list_items_contact))

        contact_name = contact_dictionary['Contact Name'] if 'Contact Name' in contact_dictionary else None
        address = contact_dictionary['Address'] if 'Address' in contact_dictionary else None
        phone = contact_dictionary['Phone'] if 'Phone' in contact_dictionary else None
        email = contact_dictionary['E-mail'] if 'E-mail' in contact_dictionary else None
        fax = contact_dictionary['Fax'] if 'Fax' in contact_dictionary else None
        link = contact_dictionary['Link'] if 'Link' in contact_dictionary else None


        admin = User.objects.get(username='admin')
        scholarship, created = Scholarship.objects.get_or_create(
            name = title.text.strip(),
            user = admin,
            description = description,
            more_info = more_info,
            #location,
            #gender,
            award_ammount = amount,
            application_deadline = application_deadline,
            nationality_requirements = nationality_requirements,
            applicable_majors = applicable_majors,
            host_institution = host_institution,
            includes = includes,
            contact_name = contact_name,
            address = address,
            phone = phone,
            email = email,
            link = link,
        )


    return HttpResponse('scholarships done')

from urllib.request import urlopen as uReq, Request
#from seleniumwire import webdriver
import undetected_chromedriver as uc
from fake_useragent import UserAgent
from directory.models import ApplicationDeadline, Deadline, University, Program, AcademicRequirement

def loadMasters(request):
    print('loading............')
    path = '/Users/mohamed/Downloads/chromedriver'
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    browser = uc.Chrome(options=options)
    url = "https://www.mastersportal.com/search/master?page=1"
    browser.get(url)

    #try:
    soup = BeautifulSoup(browser.page_source, "lxml")
    ul = soup.find('ul', {'class':'SearchResultsList'})
    lis = ul.find_all('li', {'class':'HoverEffect SearchResultItem'})[0] if ul.text!='' else loadMasters()
    a = lis.find('a', {'class':'SearchStudyCard js-bestFitStudycard'}).get('href')
    a = 'https://www.mastersportal.com/studies/298860/electrical-and-computer-engineering.html?ref=search_card'
    print('major link: ', a)

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    browser = uc.Chrome(options=options)
    browser.get(a)
    soup = BeautifulSoup(browser.page_source, "lxml")

    # -Basic information
    name = soup.find('h1', {'class':'StudyTitle'}).find('a').text
    print('name: ', name)
    description = soup.find('section', {'id':'StudySummary'}).find('p').text
    print('description: ', description)

   
            
    # -Key information:
    subkeyfacts = soup.find('div', {'id':'StudyKeyFacts'})
    key_info = subkeyfacts.find_all('article', {'class':'FactItem'})
    list_indxs_key_info = []
    list_items_key_info = []
    for i in key_info:
        list_indxs_key_info.append(i.find('h3').text)
        try:
            list_items_key_info.append(i.find('div',{'class':'FactItemInformation'}).text)
        except:
            disciplines = []
            for a in i.find_all('a'):
                disciplines.append(a.text)
            list_items_key_info.append(disciplines)
    key_info_dict = dict(zip(list_indxs_key_info,list_items_key_info))
    print('key information: ', key_info_dict)
    link = soup.find('article', {'class':'ProgrammeWebsiteContainer'}).find('a').get('href')
    print('link to website:', link)

    # -Programme structure:
    program_structure = soup.find('article', {'id':'StudyContents'}).find_all('li')
    prog_struc = []
    for i in program_structure:
        prog_struc.append(i.text)
    print('program structure: ', prog_struc)    

    other_req = soup.find('div', {'class':'OtherRequirementsContent'}).text
    print('other requirements: ', other_req)

    #-Fees and funding:
    # fees_titles = []
    # fees_ammount = []
    fee_details = soup.find_all('div', {'class':'FeeDetails'})
    for fee in fee_details:
        print('fee label: ', fee.find('div', {'class':'Label'}).text)
        print('ammount: ',fee.find('div', {'class':'Amount'}).find('span', {'class':'js-currencyAmount'}).text)
        for i in fee.find('div', {'class':'Amount'}).find_all('span', {'class':'CurrencyType'}):
            print(i.text)

    program, created = Program.objects.get_or_create(
        name = name,
        image_url = None,
        description = description,    
        language = key_info_dict['Language'] if 'Language' in key_info_dict.keys() else None,
        #university = None,
        #durations = None,
        #deadlines = None,
        credits = key_info_dict['Credits'] if 'Credits' in key_info_dict.keys() else None ,
        delivered = key_info_dict['Delivered'] if 'Delivered' in key_info_dict.keys() else None ,
        link_to_website = link,
        program_structure = prog_struc,
        #academic_requirements = None,
        other_requirements = other_req,
        tuition_fee = None,
        living_cost_min = None,
        living_cost_max = None,
        location = None
    )


    # -Application 
    dates = subkeyfacts.find_all('li', {'class':'StartDateItem'})
    application_deadlines_dates = []
    deadlines_type = []
    apply_anytime=False
    for d in dates:
        start_date = d.find('time').get('datetime')
        #create a deadline instance
        deadline, created = Deadline.objects.get_or_create(start_date = start_date)
        print('starting date: ', start_date)
        application_deadlines = d.find_all('li', {'class':'ApplicationDeadline'})
        if len(application_deadlines) == 0:
            apply_anytime = True
            print('application deadline: apply anytime')
            #create the application deadline and assign it to the deadline instance
            application_deadline, created = ApplicationDeadline.objects.get_or_create(apply_anytime=True)
            deadline.application_deadlines.add(application_deadline)
            deadline.save()
            #assign the deadline instance to the program instance
            program.deadlines.add(deadline)
            program.save()
        else:
            for a in application_deadlines:
                application_deadlines_dates.append(a.find('time').get('datetime'))
                deadlines_type.append(a.find('span').text[:14].strip()) if a.find('span') is not None else print('No application deadline type')
                application_deadline, created = ApplicationDeadline.objects.get_or_create(apply_deadline=a.find('time').get('datetime'), deadline_type=a.find('span').text[:14].strip() if a.find('span') is not None else None)
                deadline.application_deadlines.add(application_deadline)
                deadline.save()
                #assign the deadline instance to the program instance
                program.deadlines.add(deadline)
                program.save()

            print('application_deadlines_dates: ', application_deadlines_dates)
            print('deadlines_type: ', deadlines_type)
            

    # -Admissiom Requirements:
    titles = []
    scores = []
    english_req = soup.find_all('div', {'class':'MainContent'})
    for e in english_req:
        title = e.find('div',{'class':'ScoreLabelContainer'}).find('span').text.strip()
        score = e.find('div',{'class':'ScoreInformationContainer'}).text.strip()
        titles.append(title)
        scores.append(score)
        req, created = AcademicRequirement.objects.get_or_create(name=title, score=score )
        program.academic_requirements.add(req)
        program.save()
    req_dict = dict(zip(titles,scores))
    # create the req instances and assign to the program
    print('requirements dict: ', req_dict)


    # -university link
    # univ_link = soup.find('a', {'class': 'Name TextLink Connector js-organisation-info-link'}).get('href')

    # options_ = webdriver.ChromeOptions()
    # options_.add_argument("--headless")
    # browser_ = uc.Chrome(options=options_)
    # url_ = 'https://www.mastersportal.com' + univ_link
    # print(url_)
    # browser_.get(url_)
    # soup_ = BeautifulSoup(browser_.page_source, "lxml")

    # title = soup_.find('span', {'class':'OrganisationTitle'}).text
    # image_link = soup_.find('picture', {'class':'js-coverImage'}).find('img').get('src')
    # image_link = 'http:'+image_link
    # desc_sp = soup_.find('div', {'id': 'ShortDescription'}).text
    # all_programs_by_discipline_order = soup_.find_all('div', {'class':'FoldContent'})
    # disciplines = soup_.find_all('strong', {'class', 'FoldTitle'})

    # disciplines_list = []
    # import re
    # for discipline in disciplines:
    #     disciplines_list.append(re.sub('\d', '', discipline.text).replace(' ()', ''))

    # programs_list_links=[]
    # for programs in all_programs_by_discipline_order:
    #     programs_list_links.append(programs.find_all('a'))

    # programs_links_by_discipline = dict(zip(disciplines_list,programs_list_links))
    
    
    # url_ = 'https://www.mastersportal.com' + univ_link

    # Logic:
    # Now we are in the masters site, we shall create the logic based on that
    # if University.objects.filter(name=univ_name_listing).exists():
    #     university = University.objects.filter(name = univ_name_listing)[0]
    #     if university.sp_masters == False:
    #         # Here we shall update the university
    #         options_ = webdriver.ChromeOptions()
    #         options_.add_argument("--headless")
    #         browser_ = uc.Chrome(options=options_)
    #         url_ = 'https://www.mastersportal.com' + univ_link
    #         print('university: ',url_)
    #         browser_.get(url_)
    #         soup_ = BeautifulSoup(browser_.page_source, "lxml")
    #         title = soup_.find('span', {'class':'OrganisationTitle'}).text
    #         image_link = soup_.find('picture', {'class':'js-coverImage'}).find('img').get('src')
    #         image_link = 'http:'+image_link
    
    #         # check if the university have a bigger university
    #         if soup_.find('span', {'class':''}).text:
    #             main_university_link = soup_.find('span', {'class':''}).text
    #             options_ = webdriver.ChromeOptions()
    #             options_.add_argument("--headless")
    #             browser_ = uc.Chrome(options=options_)
    #             url_ = main_university_link
    #             print('university: ',url_)
    #             browser_.get(url_)
    #             soup_ = BeautifulSoup(browser_.page_source, "lxml")
    #             desc_sp = soup_.find('div', {'id': 'ShortDescription'}).text
    #             university, created = University.objects.update_or_create(description_sp = desc_sp)
    #         else:
    #             university, created = University.objects.update_or_create(description_sp = desc_sp)
 
    #         # Here we should scrape the masters from the university
    #         all_programs_by_discipline_order = soup_.find_all('div', {'class':'FoldContent'})
    #         disciplines = soup_.find_all('strong', {'class', 'FoldTitle'})
    #         disciplines_list = []
    #         import re
    #         for discipline in disciplines:
    #             disciplines_list.append(re.sub('\d', '', discipline.text).replace(' ()', ''))
    #         programs_list_links=[]
    #         for programs in all_programs_by_discipline_order:
    #             programs_list_links.append(programs.find_all('a'))

    #         programs_links_by_discipline = dict(zip(disciplines_list,programs_list_links))
    #         #We're going through the majors/programs from the dictionary
    #         for item in programs_links_by_discipline:
    #             disc = item
    #             discipline, created = Discipline.objects.get_or_create(name=disc)
    #             for l in programs_links_by_discipline[item]:
    #                 print('getting into major: ', l.get('href'))

    #                 #a = lis.find('a', {'class':'SearchStudyCard js-bestFitStudycard'}).get('href')

    #                 options = webdriver.ChromeOptions()
    #                 options.add_argument("--headless")
    #                 browser = uc.Chrome(options=options)
    #                 browser.get(l.get('href'))
    #                 soup = BeautifulSoup(browser.page_source, "lxml")
    #                 name = soup.find('h1', {'class':'StudyTitle'}).find('a').text
    #                 description = soup.find('section', {'id':'StudySummary'}).find('p').text
    #                 # -Key information:
    #                 subkeyfacts = soup.find('div', {'id':'StudyKeyFacts'})
    #                 duration_list = subkeyfacts.find_all('li', {'class':'FactListItem'})
    #                 dates = subkeyfacts.find_all('li', {'class':'StartDateItem'})
    #                 application_deadlines_dates = []
    #                 deadlines_type = []
    #                 for d in dates:
    #                     starting_date = d.find('time').get('datetime')
    #                     application_deadlines = d.find_all('li', {'class':'ApplicationDeadline'})
    #                     for a in application_deadlines:
    #                       #we'll need to check here if there is any kind of exception
    #                         application_deadlines_dates.append(a.find('time').get('datetime'))
    #                         deadlines_type.append(a.find('span').text[:14].strip()) if a.find('span') is not None else print('No application deadline type')
    #                 key_info = subkeyfacts.find_all('article', {'class':'FactItem'})
    #                 list_indxs_key_info = []
    #                 list_items_key_info = []
    #                 for i in key_info:
    #                     list_indxs_key_info.append(i.find('h3').text)
    #                     try:
    #                         list_items_key_info.append(i.find('div',{'class':'FactItemInformation'}).text)
    #                     except:
    #                         disciplines = []
    #                         for a in i.find_all('a'):
    #                             disciplines.append(a.text)
    #                         list_items_key_info.append(disciplines)
    #                 key_info_dict = dict(zip(list_indxs_key_info,list_items_key_info))
    #                 link = soup.find('article', {'class':'ProgrammeWebsiteContainer'}).find('a').get('href')
    #                 # -Programme structure:
    #                 program_structure = soup.find('article', {'id':'StudyContents'}).find_all('li')
    #                 list_items = []
    #                 for i in program_structure:
    #                     list_items.append(i.text)
    #                 # -Admissiom Requirements:
    #                 titles = []
    #                 scores = []
    #                 english_req = soup.find_all('div', {'class':'MainContent'})
    #                 for e in english_req:
    #                     titles.append(e.find('div',{'class':'ScoreLabelContainer'}).find('span').text.strip())
    #                     scores.append(e.find('div',{'class':'ScoreInformationContainer'}).text.strip())
    #                 language_req_dict = dict(zip(titles,scores))
    #                 other_req = soup.find('div', {'class':'OtherRequirementsContent'}).find_all('li')
    #                 other_req_list = []
    #                 for req in other_req:
    #                     other_req_list.append(req.text)
    #                 # -Fees and funding:
    #                 # fees_titles = []
    #                 fees_ammount = []
    #                 fee_details = soup.find_all('div', {'class':'FeeDetails'})
    #                 for fee in fee_details:
    #                     print(fee.find('div', {'class':'Label'}).text)
    #                     print(fee.find('div', {'class':'Amount'}).text)
    #                 # -university link
    #                 univ_link = soup.find('a', {'class': 'Name TextLink Connector js-organisation-info-link'}).get('href')
    #                 
    #                 program, created = Program.objects.get_or_create(
    #                   name = name,
    #                   description = description,    
    #                   image_url = None,
    #                   university = university,
    #                   credits = credits,
    #                   delivered = delivered,
    #                   link_to_website = link,
    #                   program_structure = list_items,
    #                   
    #                   )
    #                 #create disciplines instances
    #                 #create durations instances
    #                 #create deadlines instances
    #                 #create req instances
    #                 program.disciplines.add(discipline)
    #                 program.disciplines.add(durations)
    #                 program.disciplines.add(deadlines)
    #                 program.disciplines.add(academic_requirements)
    #                 
#                 university.sp_masters=True
#                 university.save()
    #     else:
    #         print('University scraped from this site, passing...')

    # else:
    #     # Here the university does not exists, we should create it with the given arguments
    #     university, created = University.objects.get_or_create()

    #     # Create all the masters instances from the links
    #     programs_list_link = []
    #     for l in programs_list_link:
    #         program, created = Program.objects.get_or_create()


    #     # Here we should update the university sp_masters to True, because we have scraped all the majors
    #     university.sp_masters = True
    #     university.save()

    return HttpResponse('masters done')
    # except:
    #     return HttpResponse('masters nope')
        #loadMasters(request)